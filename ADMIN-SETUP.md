# Photo manager setup — `/admin`

Runbook for the owner-only page that adds photos to the galleries.
For the technical rationale, see `OPTIMIZATION-NOTES.md`.

---

## 1. Create your login

Run this **on your own machine**, never in a shared terminal or CI:

```bash
npm run admin:hash "four random words you pick"
```

Use double quotes, or the shell splits a passphrase and hashes only the first
word. Putting a **space before the command** keeps it out of your shell history.

It prints three values. Your actual password is never stored anywhere — only
the hash, which cannot be reversed back into the password. If you forget it,
generate a new hash rather than trying to recover the old one.

Minimum 12 characters, enforced. This single credential guards file upload on a
public website and there is exactly one account to attack, so a four- or
five-word passphrase beats a short complex one.

## 2. Create the Blob store

Vercel → **Storage** → **Blob** → create, then **connect it to this project**.

Connecting is the step that injects `BLOB_READ_WRITE_TOKEN`. Creating a store
without connecting it leaves the variable unset, and uploads will fail with
"Photo storage is not configured" while login still works.

## 3. Set the environment variables

Vercel → **Settings** → **Environment Variables**, scoped to **Production**:

| Variable | Source | Notes |
|---|---|---|
| `ADMIN_USERNAME` | you choose | |
| `ADMIN_PASSWORD_HASH` | step 1 | starts `scrypt:` |
| `ADMIN_SESSION_SECRET` | step 1 | random, generated for you |
| `BLOB_READ_WRITE_TOKEN` | step 2 | auto-injected once connected |

## 4. Redeploy

**Vercel bakes environment variables in at build time.** Adding them to an
already-built deployment does nothing until you redeploy:
Deployments → ⋯ → **Redeploy**.

If `/admin` says *"Admin is not configured on this deployment"*, this is the
step you are missing.

## Finding the page

There is a discreet **Staff login** link in the site footer, or go straight to
`/admin`.

Linking it is safe — the protection is the password, never the URL being
secret. One consequence is worth knowing: `robots.txt` deliberately does
**not** block `/admin`.

`robots.txt` and `noindex` cannot both work on the same URL. A blocked page is
never fetched, so the crawler never sees the `noindex` meta tag — and can
still index the bare URL from a link's anchor text. Allowing the fetch is
precisely what keeps `/admin` out of search results.

**Do not "harden" this by adding the disallow back.** It would have the exact
opposite effect from the one intended.

## 5. Test it end to end

1. `cruzelectric.com/admin` → login form appears
2. Sign in
3. Upload one photo, pick a gallery, write the description
4. It appears as a **Draft** — press **Publish**
5. Open that gallery and confirm the photo is there

Steps 3–5 exercise the Vercel Blob round-trip, which was never tested against
a real store during development (all testing used a dummy token). If anything
is going to fail on first run, it is here.

---

## How it works

- Uploads land as **drafts**. Nothing appears publicly until you press Publish.
- Photos are **added to** the images built into the site, never replacing them.
  An empty manifest behaves exactly like a fresh install.
- Every upload is **re-encoded** — resized to max 1800px and saved as JPEG.
- **Alt text is required.** It is read aloud to visually impaired visitors and
  is how the photo gets found in Google Images. The photos shipped with the
  site all have written descriptions; uploads are held to the same standard.

## Privacy: location data is removed

Phones write GPS coordinates into photos. A job-site photo taken at a
customer's house or farm carries **the exact location where it was shot**.

Re-encoding strips all EXIF, including GPS, before anything is stored. This is
verified: a test image with GPS tags comes out the other side with no EXIF
block at all. You do not need to do anything — but be aware that if you ever
publish photos through some other route, that protection is not there.

## Security notes

- Credentials live in environment variables, never in the repo. The repo is on
  GitHub; a password committed once stays in history forever.
- Session cookie is `httpOnly`, `Secure`, `SameSite=strict`, 8-hour expiry.
- Login is rate limited to 8 attempts per 15 minutes per IP. In-memory, so on
  serverless it is per-instance — a speed bump against credential stuffing, not
  a guarantee. Move to Vercel KV if it ever needs to be robust.
- Uploads are authenticated **before** the request body is read, capped at
  15 MB, and identified by **magic bytes** rather than file extension or
  `Content-Type` (both are trivially forged).
- `/admin` is excluded from search three ways: `robots.txt`, `noindex`
  metadata, and omission from the sitemap. None of these are access control —
  the session check in each route handler is.

## Rotating the password

1. `npm run admin:hash "new passphrase"`
2. Replace `ADMIN_PASSWORD_HASH` in Vercel
3. Also replace `ADMIN_SESSION_SECRET` to invalidate existing sessions
4. Redeploy

## Troubleshooting

| Symptom | Cause |
|---|---|
| "Admin is not configured on this deployment" | One of the three admin vars is unset, or you have not redeployed since adding them |
| Login always fails despite a correct password | The hash was corrupted in transit. It must start `scrypt:` and contain exactly two colons. See the note below. |
| "Photo storage is not configured" | Blob store not connected to the project |
| "This server cannot read HEIC photos" | iPhone format. Settings → Camera → Formats → Most Compatible |
| Published photo not showing | Gallery caches for up to 5 minutes; publishing normally clears it immediately |

### Why the hash uses `:` and not `$`

The conventional format for password hashes uses `$` as a separator. **Do not
reintroduce that here.** Next.js performs `$VARIABLE` expansion inside `.env`
files, so a hash written as `scrypt$abc$def` silently collapses to `scrypt`
once the two undefined variables expand to nothing — and login then fails
forever with no error explaining why. Shell `source` of an env file does the
same. `:` has no special meaning to either.

---

## Known-good behaviour when misconfigured

`/admin` now tells you exactly what is wrong instead of showing a login form
you can never get through:

- **Missing variables** → a "Not configured yet" screen listing the exact
  variable names that are unset, plus a "Check again" button.
- **Malformed `ADMIN_PASSWORD_HASH`** → says so explicitly. A hash gutted by
  `$VARIABLE` expansion rejects every password forever and otherwise looks
  identical to typing the wrong one.

If you see the login form, the configuration is fine and the credentials are
simply wrong.

> Earlier build note: a client-side bug treated any non-401 response as
> "signed in", so an unconfigured deployment rendered the manager UI to
> visitors. No data or capability was exposed — every route rejects
> independently, so the list came back empty and writes were refused — but it
> looked signed in. Fixed: only an explicit `200` now counts as authenticated.

---

## Managing the team

The **Team** tab adds and removes the electricians shown on `/gallary`.

- **Add** — photo, name, role. A head-and-shoulders shot works best; the cards
  are tall. Alt text is generated for you from the name and role rather than
  asked for twice.
- **Publish** — new people are drafts until you publish them, same as photos.
- **Reorder** — arrows move someone up or down. This is the order visitors
  see, so put the owner first.
- **Edit** — fix a name or role without re-uploading the photo.
- **Remove** — deletes the person and their photo permanently.

**Publishing one real person replaces all the placeholder cards at once.** That
is deliberate: mixing a named electrician beside an anonymous "Electrician"
card reads as though someone was left out. Add everyone, then publish.

Team photos go through exactly the same pipeline as gallery photos, so **EXIF
and GPS are stripped from portraits too** — a photo of a crew member taken on
site does not carry that location.
