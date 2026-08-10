import {
  scryptSync,
  randomBytes,
  timingSafeEqual,
  createHmac,
} from 'node:crypto'

/**
 * Authentication for the owner-only /admin area.
 *
 * DESIGN NOTES
 *
 * No bcrypt dependency: Node ships scrypt, which is a memory-hard password KDF
 * and entirely adequate here. One fewer third-party package in the supply
 * chain for code that guards file upload.
 *
 * Credentials live in environment variables, never in source. The repo is on
 * GitHub -- a password committed once stays in git history forever and cannot
 * be rotated without a deploy. From the owner's point of view this is still a
 * fixed username and password; it is only *stored* safely.
 *
 * REQUIRED ENVIRONMENT VARIABLES
 *   ADMIN_USERNAME        e.g. "isaac"
 *   ADMIN_PASSWORD_HASH   output of `npm run admin:hash` (never the password)
 *   ADMIN_SESSION_SECRET  >=32 random bytes, e.g. `openssl rand -base64 48`
 *
 * All three are server-only. None are prefixed NEXT_PUBLIC_, so Next will
 * never inline them into the client bundle.
 */

const SCRYPT_KEYLEN = 64
// Cost parameters. N=2^15 keeps a single verification comfortably under ~100ms
// on serverless while being expensive to brute-force at scale.
const SCRYPT_OPTS = { N: 32768, r: 8, p: 1, maxmem: 96 * 1024 * 1024 }

export const SESSION_COOKIE = 'cruz_admin'
export const SESSION_TTL_SECONDS = 60 * 60 * 8 // 8 hours — one working day

/**
 * Produces the value to store in ADMIN_PASSWORD_HASH.
 *
 * Delimiter is ':' and NOT '$', despite '$' being the conventional PHC
 * separator. Next.js performs $VARIABLE expansion inside .env files, so a
 * hash written as `scrypt$abc$def` silently becomes `scrypt` once the two
 * undefined variables expand to nothing -- and login then fails forever with
 * no indication why. Shell `source` of an env file does the same thing. ':'
 * has no special meaning to either.
 */
export function hashPassword(password) {
  const salt = randomBytes(16)
  const hash = scryptSync(password, salt, SCRYPT_KEYLEN, SCRYPT_OPTS)
  return `scrypt:${salt.toString('hex')}:${hash.toString('hex')}`
}

/** Constant-time password check. Returns false rather than throwing. */
export function verifyPassword(password, stored) {
  try {
    if (typeof stored !== 'string') return false
    const [scheme, saltHex, hashHex] = stored.split(':')
    if (scheme !== 'scrypt' || !saltHex || !hashHex) return false

    const expected = Buffer.from(hashHex, 'hex')
    const actual = scryptSync(password, Buffer.from(saltHex, 'hex'), expected.length, SCRYPT_OPTS)
    return timingSafeEqual(expected, actual)
  } catch {
    return false
  }
}

const b64url = (buf) => Buffer.from(buf).toString('base64url')

function sign(payloadB64, secret) {
  return createHmac('sha256', secret).update(payloadB64).digest('base64url')
}

/**
 * Stateless signed session. There is exactly one user, so a database-backed
 * session table would be overhead; an HMAC over {username, expiry} is enough
 * and cannot be forged without ADMIN_SESSION_SECRET.
 */
export function createSessionToken(username) {
  const secret = process.env.ADMIN_SESSION_SECRET
  if (!secret) throw new Error('ADMIN_SESSION_SECRET is not set')

  const payload = b64url(
    JSON.stringify({ u: username, exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS })
  )
  return `${payload}.${sign(payload, secret)}`
}

/** Returns the username, or null for any invalid/expired/tampered token. */
export function verifySessionToken(token) {
  try {
    const secret = process.env.ADMIN_SESSION_SECRET
    if (!secret || typeof token !== 'string') return null

    const [payload, mac] = token.split('.')
    if (!payload || !mac) return null

    // Compare the MAC in constant time before parsing anything.
    const expected = Buffer.from(sign(payload, secret))
    const actual = Buffer.from(mac)
    if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) return null

    const { u, exp } = JSON.parse(Buffer.from(payload, 'base64url').toString())
    if (!u || typeof exp !== 'number' || exp < Math.floor(Date.now() / 1000)) return null
    return u
  } catch {
    return null
  }
}

/**
 * Names of any required variables that are unset.
 *
 * The names are safe to return to the client: if admin is unconfigured there
 * is nothing to attack, and without this the owner has no way to tell a typo
 * from a missing redeploy. Values are of course never exposed.
 */
export function missingAdminConfig() {
  return ['ADMIN_USERNAME', 'ADMIN_PASSWORD_HASH', 'ADMIN_SESSION_SECRET'].filter(
    (name) => !process.env[name]
  )
}

/** True when every required secret is present — used to fail closed. */
export function isAdminConfigured() {
  return missingAdminConfig().length === 0
}

/**
 * Catches a password hash mangled by $VARIABLE expansion in a .env file.
 * A hash that lost its salt silently rejects every password forever, which is
 * otherwise indistinguishable from simply typing the wrong one.
 */
export function adminHashLooksValid() {
  const h = process.env.ADMIN_PASSWORD_HASH
  return typeof h === 'string' && /^scrypt:[0-9a-f]{32}:[0-9a-f]{128}$/.test(h)
}

/**
 * Checks the session cookie on a request. `cookies()` is async from Next 15.
 * Returns the username or null; callers must treat null as "reject".
 */
export async function getAdminUser(cookieStore) {
  const token = cookieStore.get(SESSION_COOKIE)?.value
  return token ? verifySessionToken(token) : null
}

export const sessionCookieOptions = {
  httpOnly: true, // not readable by JS, so XSS cannot exfiltrate the session
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict', // the main CSRF defence for the admin POST routes
  path: '/',
  maxAge: SESSION_TTL_SECONDS,
}

/* ---------------------------------------------------------------------------
   Login rate limiting.

   In-memory, so on serverless it is per-instance and resets on cold start --
   it is a speed bump, not a guarantee. It is still worth having: it defeats
   naive credential stuffing against a single known username at near-zero cost.
   If this ever needs to be robust, move the counter to Vercel KV.
--------------------------------------------------------------------------- */
const attempts = new Map()
const WINDOW_MS = 15 * 60 * 1000
const MAX_ATTEMPTS = 8

export function rateLimit(key) {
  const now = Date.now()
  const entry = attempts.get(key)

  if (!entry || now > entry.resetAt) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS })
    return { allowed: true, remaining: MAX_ATTEMPTS - 1 }
  }

  entry.count += 1
  if (entry.count > MAX_ATTEMPTS) {
    return { allowed: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) }
  }
  return { allowed: true, remaining: MAX_ATTEMPTS - entry.count }
}

export function clearRateLimit(key) {
  attempts.delete(key)
}
