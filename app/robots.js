import { SITE } from '@/app/lib/site'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // /admin is the owner's photo manager and /api/ backs it. Note this is
        // only half the protection: a disallowed URL can still be indexed if
        // something links to it, because the crawler never fetches the page
        // and so never sees a noindex. app/admin/layout.js sets robots
        // noindex for exactly that reason. Neither is access control -- the
        // session check in each route handler is.
        disallow: ['/api/', '/admin'],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  }
}
