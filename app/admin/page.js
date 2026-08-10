import AdminApp from '@/app/components/admin/AdminApp'

/**
 * Server shell. Rendering is dynamic so the page is never cached with one
 * user's state, and the actual UI is a client component because it is an
 * interactive tool rather than content.
 */
export const dynamic = 'force-dynamic'

export default function AdminPage() {
  return <AdminApp />
}
