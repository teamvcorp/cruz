import { put, list, del } from '@vercel/blob'

/**
 * Storage for owner-uploaded gallery photos.
 *
 * WHY BLOB STORAGE AND NOT public/
 * Two hard blockers made "just write the file into public/" impossible:
 *  1. The bundled gallery images use build-time static imports
 *     (`import comm1 from "@/public/images/comm1.jpg"`), which webpack and
 *     Turbopack resolve when the site is built. A file written at runtime can
 *     never join that list.
 *  2. Vercel's filesystem is read-only and ephemeral. A write either fails
 *     outright or disappears on the next deploy.
 *
 * So uploads live in Vercel Blob and a small JSON manifest records what
 * belongs in which gallery. The bundled images stay exactly as they are; the
 * uploaded ones are appended at render time.
 */

const MANIFEST_PATH = 'gallery/manifest.json'

export const CATEGORIES = ['residential', 'commercial', 'agricultural', 'communications', 'generator']

/**
 * Two kinds of item share this manifest:
 *   'gallery' — project photos, filed under a CATEGORY
 *   'team'    — crew members, with a name and role, shown on /gallary
 *
 * One manifest rather than two stores: the CRUD, the auth, the upload
 * pipeline and the cache invalidation are identical, and only a handful of
 * fields differ. A parallel team-store.js would have duplicated all of it.
 */
export const KINDS = ['gallery', 'team']

const emptyManifest = () => ({ version: 1, items: [] })

/**
 * Reads the manifest. Returns an empty one if it does not exist yet, so a
 * fresh deployment with no uploads behaves identically to a populated one.
 */
export const GALLERY_TAG = 'gallery-manifest'

/**
 * @param {'live'|'cached'} mode
 *   'live'   — admin screens; must never show stale state.
 *   'cached' — public gallery pages. Tagged so publishing invalidates them at
 *              once, with a 5-minute ceiling as a safety net. Without this the
 *              gallery pages would drop out of static rendering entirely just
 *              to re-read a small JSON file on every request.
 */
export async function readManifest(mode = 'live') {
  try {
    const { blobs } = await list({ prefix: MANIFEST_PATH, limit: 1 })
    const found = blobs.find((b) => b.pathname === MANIFEST_PATH)
    if (!found) return emptyManifest()

    const res = await fetch(
      found.url,
      mode === 'cached'
        ? { next: { revalidate: 300, tags: [GALLERY_TAG] } }
        : { cache: 'no-store' }
    )
    if (!res.ok) return emptyManifest()

    const data = await res.json()
    if (!data || !Array.isArray(data.items)) return emptyManifest()
    return data
  } catch {
    // Never let a storage hiccup take the public gallery down — the bundled
    // images alone are a perfectly good gallery.
    return emptyManifest()
  }
}

async function writeManifest(manifest) {
  await put(MANIFEST_PATH, JSON.stringify(manifest, null, 2), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 0,
  })
}

/**
 * Photos for one gallery, newest first. Only published ones are public.
 * Items predating the team feature have no `kind`, so treat those as gallery.
 */
export async function getPublishedItems(category) {
  const { items } = await readManifest('cached')
  return items
    .filter((i) => i.published && (i.kind ?? 'gallery') === 'gallery')
    .filter((i) => !category || i.category === category)
    .sort((a, b) => (a.uploadedAt < b.uploadedAt ? 1 : -1))
}

/**
 * Published crew members, in display order.
 *
 * Sorted by `order` ascending so the owner controls who appears first —
 * unlike the galleries, where newest-first is the sensible default.
 */
export async function getPublishedTeam() {
  const { items } = await readManifest('cached')
  return items
    .filter((i) => i.published && i.kind === 'team')
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0) || (a.uploadedAt < b.uploadedAt ? -1 : 1))
}

/** Everything, including drafts — admin UI only. */
export async function getAllItems() {
  const { items } = await readManifest()
  return items
    .map((i) => ({ ...i, kind: i.kind ?? 'gallery' }))
    .sort((a, b) => (a.uploadedAt < b.uploadedAt ? 1 : -1))
}

/**
 * Moves a crew member up or down the display order.
 *
 * Normalises the whole team to 0..n-1 first, so a manifest where order was
 * never set (or has collided) still reorders predictably rather than doing
 * nothing.
 */
export async function reorderTeam(id, direction) {
  const manifest = await readManifest()
  const team = manifest.items
    .filter((i) => i.kind === 'team')
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

  const idx = team.findIndex((i) => i.id === id)
  if (idx === -1) return false

  const target = direction === 'up' ? idx - 1 : idx + 1
  if (target < 0 || target >= team.length) return false

  ;[team[idx], team[target]] = [team[target], team[idx]]
  team.forEach((member, i) => {
    const item = manifest.items.find((x) => x.id === member.id)
    if (item) item.order = i
  })

  await writeManifest(manifest)
  return true
}

export async function addItem(item) {
  const manifest = await readManifest()
  manifest.items.push(item)
  await writeManifest(manifest)
  return item
}

export async function updateItem(id, patch) {
  const manifest = await readManifest()
  const idx = manifest.items.findIndex((i) => i.id === id)
  if (idx === -1) return null

  // Whitelist the mutable fields. Never let a request overwrite id, url,
  // kind or dimensions, which are set server-side at upload time.
  const allowed =
    manifest.items[idx].kind === 'team'
      ? ['published', 'alt', 'name', 'role']
      : ['published', 'alt', 'category']
  for (const key of allowed) {
    if (key in patch) manifest.items[idx][key] = patch[key]
  }
  await writeManifest(manifest)
  return manifest.items[idx]
}

export async function removeItem(id) {
  const manifest = await readManifest()
  const item = manifest.items.find((i) => i.id === id)
  if (!item) return false

  manifest.items = manifest.items.filter((i) => i.id !== id)
  await writeManifest(manifest)

  // Best effort — an orphaned blob is far less bad than a manifest entry
  // pointing at a deleted file.
  try {
    await del(item.url)
  } catch {}
  return true
}
