import { cookies, headers } from 'next/headers'
import { NextResponse } from 'next/server'
import {
  verifyPassword,
  createSessionToken,
  isAdminConfigured,
  rateLimit,
  clearRateLimit,
  SESSION_COOKIE,
  sessionCookieOptions,
} from '@/app/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Sign in.
 *
 * Every failure path returns the SAME message and the same status. There is
 * only one valid username, so distinguishing "no such user" from "wrong
 * password" would confirm the username to an attacker for free.
 *
 * The username is compared before the password so a wrong username still pays
 * the scrypt cost — otherwise response timing would leak whether the username
 * was right. (verifyPassword is run unconditionally below for that reason.)
 */
export async function POST(request) {
  if (!isAdminConfigured()) {
    return NextResponse.json(
      { error: 'Admin is not configured on this deployment.' },
      { status: 503 }
    )
  }

  const hdrs = await headers()
  // On Vercel the client IP arrives in x-forwarded-for. Falling back to a
  // constant means the limiter degrades to global rather than failing open.
  const ip = (hdrs.get('x-forwarded-for') || 'unknown').split(',')[0].trim()

  const limit = rateLimit(ip)
  if (!limit.allowed) {
    return NextResponse.json(
      { error: `Too many attempts. Try again in ${Math.ceil(limit.retryAfter / 60)} minutes.` },
      { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } }
    )
  }

  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const username = String(body?.username ?? '')
  const password = String(body?.password ?? '')

  // Always run the KDF, even when the username is wrong, so both paths cost
  // the same wall-clock time.
  const passwordOk = verifyPassword(password, process.env.ADMIN_PASSWORD_HASH)
  const usernameOk = username === process.env.ADMIN_USERNAME

  if (!usernameOk || !passwordOk) {
    return NextResponse.json({ error: 'Incorrect username or password.' }, { status: 401 })
  }

  clearRateLimit(ip)

  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE, createSessionToken(username), sessionCookieOptions)

  return NextResponse.json({ ok: true, user: username })
}
