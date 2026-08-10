import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { SESSION_COOKIE, sessionCookieOptions } from '@/app/lib/auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Sign out. POST rather than GET so a stray <img> or link prefetch cannot log
 * the owner out, and so sameSite=strict actually applies.
 */
export async function POST() {
  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE, '', { ...sessionCookieOptions, maxAge: 0 })
  return NextResponse.json({ ok: true })
}
