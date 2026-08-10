import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'
import { getAdminUser, missingAdminConfig } from '@/app/lib/auth'
import { getAllItems, updateItem, removeItem, CATEGORIES, GALLERY_TAG } from '@/app/lib/gallery-store'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * List / publish / unpublish / delete uploaded photos.
 *
 * Every method re-checks the session independently. Route handlers are
 * individually addressable, so authentication cannot be delegated to the page
 * that happens to link to them.
 */

async function requireAdmin() {
  const missing = missingAdminConfig()
  if (missing.length) {
    return {
      error: NextResponse.json(
        { error: 'Admin is not configured on this deployment.', code: 'not_configured', missing },
        { status: 503 }
      ),
    }
  }
  const user = await getAdminUser(await cookies())
  if (!user) {
    return { error: NextResponse.json({ error: 'Not signed in.' }, { status: 401 }) }
  }
  return { user }
}

/** Revalidate the affected gallery plus the index so changes show immediately. */
function revalidateGalleries(category) {
  // Next 16 requires a cacheLife profile as the second argument;
  // the single-argument form is deprecated and errors in TS.
  revalidateTag(GALLERY_TAG, 'max')
  if (category) revalidatePath(`/gallary/${category}`)
  revalidatePath('/gallary')
}

export async function GET() {
  const { error } = await requireAdmin()
  if (error) return error
  return NextResponse.json({ items: await getAllItems() })
}

export async function PATCH(request) {
  const { error } = await requireAdmin()
  if (error) return error

  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const { id, published, alt, category } = body ?? {}
  if (!id) return NextResponse.json({ error: 'Missing photo id.' }, { status: 400 })

  const patch = {}
  if (typeof published === 'boolean') patch.published = published
  if (typeof alt === 'string') {
    const trimmed = alt.trim()
    if (trimmed.length < 10 || trimmed.length > 200) {
      return NextResponse.json(
        { error: 'Description must be between 10 and 200 characters.' },
        { status: 400 }
      )
    }
    patch.alt = trimmed
  }
  if (typeof category === 'string') {
    if (!CATEGORIES.includes(category)) {
      return NextResponse.json({ error: 'Unknown gallery.' }, { status: 400 })
    }
    patch.category = category
  }

  const item = await updateItem(id, patch)
  if (!item) return NextResponse.json({ error: 'Photo not found.' }, { status: 404 })

  revalidateGalleries(item.category)
  return NextResponse.json({ item })
}

export async function DELETE(request) {
  const { error } = await requireAdmin()
  if (error) return error

  const id = new URL(request.url).searchParams.get('id')
  if (!id) return NextResponse.json({ error: 'Missing photo id.' }, { status: 400 })

  const ok = await removeItem(id)
  if (!ok) return NextResponse.json({ error: 'Photo not found.' }, { status: 404 })

  CATEGORIES.forEach((c) => revalidatePath(`/gallary/${c}`))
  revalidatePath('/gallary')
  return NextResponse.json({ ok: true })
}
