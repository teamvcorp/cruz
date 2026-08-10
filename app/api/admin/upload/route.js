import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import sharp from 'sharp'
import { randomUUID } from 'node:crypto'
import { getAdminUser, isAdminConfigured } from '@/app/lib/auth'
import { addItem, CATEGORIES } from '@/app/lib/gallery-store'

/**
 * Owner photo upload.
 *
 * File upload is the highest-risk feature you can add to a website, so the
 * order of operations below is deliberate and should not be rearranged:
 *
 *   1. Fail closed if the admin secrets are not configured at all.
 *   2. Authenticate BEFORE touching the request body — an unauthenticated
 *      caller must never be able to make us buffer a large payload.
 *   3. Enforce a size cap.
 *   4. Identify the format from MAGIC BYTES, not the filename extension or
 *      the Content-Type header. Both are attacker-controlled and trivially
 *      spoofed; a file called cat.jpg can be anything at all.
 *   5. Re-encode through sharp. This is the single most valuable step: it
 *      normalises the file to a known-good JPEG, neutralises polyglot files
 *      that are valid in two formats at once, and STRIPS ALL EXIF — including
 *      the GPS coordinates that phones write into job-site photos. Publishing
 *      those raw would leak the home and farm addresses of customers.
 *   6. Generate the stored filename server-side. The client filename is never
 *      used for the path, so `../../` and null bytes are irrelevant.
 *
 * Uploads land unpublished. The owner sets alt text and confirms before
 * anything appears publicly.
 */

export const runtime = 'nodejs' // sharp and node:crypto need the Node runtime
export const dynamic = 'force-dynamic'

const MAX_BYTES = 15 * 1024 * 1024 // 15 MB — generous for a modern phone photo
const MAX_DIMENSION = 1800 // gallery renders at 896px CSS, so 1800 covers retina

/** Format detection by file signature. Returns null for anything unknown. */
function sniffImageType(buf) {
  if (buf.length < 12) return null

  // JPEG: FF D8 FF
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return 'jpeg'

  // PNG: 89 50 4E 47 0D 0A 1A 0A
  if (buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])))
    return 'png'

  // WebP: "RIFF" .... "WEBP"
  if (buf.subarray(0, 4).toString('ascii') === 'RIFF' && buf.subarray(8, 12).toString('ascii') === 'WEBP')
    return 'webp'

  // HEIC/HEIF (iPhone default): "ftyp" at offset 4, then a heic/mif1 brand.
  if (buf.subarray(4, 8).toString('ascii') === 'ftyp') {
    const brand = buf.subarray(8, 12).toString('ascii')
    if (['heic', 'heix', 'hevc', 'mif1', 'msf1', 'heim'].includes(brand)) return 'heif'
  }

  return null
}

function fail(message, status) {
  return NextResponse.json({ error: message }, { status })
}

export async function POST(request) {
  // 1. Fail closed.
  if (!isAdminConfigured()) return fail('Admin is not configured on this deployment.', 503)

  // 2. Authenticate first.
  const user = await getAdminUser(await cookies())
  if (!user) return fail('Not signed in.', 401)

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return fail('Photo storage is not configured (BLOB_READ_WRITE_TOKEN missing).', 503)
  }

  let form
  try {
    form = await request.formData()
  } catch {
    return fail('Could not read the upload.', 400)
  }

  const file = form.get('file')
  const category = String(form.get('category') || '')
  const alt = String(form.get('alt') || '').trim()

  if (!file || typeof file.arrayBuffer !== 'function') return fail('No file was attached.', 400)
  if (!CATEGORIES.includes(category)) return fail('Pick a gallery for this photo.', 400)

  // Alt text is required, not optional. Every bundled gallery image has a
  // written description for screen readers and image search; letting uploads
  // through without one would quietly undo that.
  if (alt.length < 10) return fail('Describe the photo in at least 10 characters.', 400)
  if (alt.length > 200) return fail('Keep the description under 200 characters.', 400)

  // 3. Size cap.
  if (typeof file.size === 'number' && file.size > MAX_BYTES) {
    return fail('That photo is larger than 15 MB. Try one straight from your camera roll.', 413)
  }

  const input = Buffer.from(await file.arrayBuffer())
  if (input.length > MAX_BYTES) return fail('That photo is larger than 15 MB.', 413)
  if (input.length === 0) return fail('That file was empty.', 400)

  // 4. Magic bytes — never trust the extension or Content-Type.
  const kind = sniffImageType(input)
  if (!kind) {
    return fail('That file is not a photo. JPEG, PNG, WebP and HEIC are supported.', 415)
  }

  // 5. Re-encode. Also strips EXIF/GPS.
  let output
  let meta
  try {
    const pipeline = sharp(input, { limitInputPixels: 100_000_000 })
      .rotate() // apply EXIF orientation before we discard the EXIF
      .resize({ width: MAX_DIMENSION, height: MAX_DIMENSION, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true, progressive: true })

    output = await pipeline.toBuffer()
    meta = await sharp(output).metadata()
  } catch (err) {
    // HEIC support depends on how libvips was built, so say something useful
    // rather than "processing failed".
    if (kind === 'heif') {
      return fail(
        'This server cannot read HEIC photos. On iPhone: Settings > Camera > Formats > Most Compatible, then re-take or convert to JPEG.',
        415
      )
    }
    return fail('That photo could not be processed. Try a different file.', 422)
  }

  // 6. Server-generated path. The client filename never touches it.
  const id = randomUUID()
  const pathname = `gallery/${category}/${id}.jpg`

  let blob
  try {
    blob = await put(pathname, output, {
      access: 'public',
      contentType: 'image/jpeg',
      addRandomSuffix: false,
    })
  } catch {
    return fail('Could not save the photo. Please try again.', 502)
  }

  const item = await addItem({
    id,
    url: blob.url,
    pathname,
    category,
    alt,
    width: meta.width,
    height: meta.height,
    bytes: output.length,
    uploadedAt: new Date().toISOString(),
    uploadedBy: user,
    published: false, // review step — nothing goes public automatically
  })

  return NextResponse.json({ item }, { status: 201 })
}
