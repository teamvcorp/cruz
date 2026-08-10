/**
 * The admin area must never be indexed.
 *
 * Three separate layers, because each covers a gap the others leave:
 *   - robots meta here stops indexing if a crawler reaches the page anyway
 *   - app/robots.js disallows /admin for crawlers that respect robots.txt
 *   - the sitemap simply never lists it
 *
 * robots.txt alone is not enough: a disallowed URL can still be indexed if
 * something links to it, because the crawler is told not to *fetch* it and
 * therefore never sees a noindex. Both are needed.
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
