/**
 * The admin area must never be indexed.
 *
 * This noindex is now the PRIMARY defence, not a backup. /admin is linked from
 * the site footer, and app/robots.js deliberately does not disallow it —
 * because robots.txt and noindex cannot both work on the same URL. A
 * disallowed page is never fetched, so the crawler never sees a noindex and
 * can still index the bare URL from a link's anchor text. Allowing the fetch
 * is what lets this tag do its job.
 *
 * The sitemap also never lists it. None of this is access control: the
 * session check in every route handler is.
 */
export const metadata = {
  title: 'Photo manager | Cruz Electric',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
}

export default function AdminLayout({ children }) {
  return <div className="min-h-screen bg-gray-50">{children}</div>
}
