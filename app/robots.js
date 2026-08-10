import { SITE } from '@/app/lib/site'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        /*
          /admin is deliberately NOT disallowed here.

          It is linked from the footer so the owner can reach it, and
          robots.txt + noindex are mutually exclusive: a disallowed URL is
          never fetched, so the crawler never sees the noindex meta tag, and
          can still index the bare URL from a link's anchor text. Letting
          crawlers fetch /admin means the noindex in app/admin/layout.js is
          actually honoured and the page is dropped properly.

          Neither of those is access control. The session check in every
          route handler is; /admin without a valid cookie shows only a login
          form.
        */
        disallow: ['/api/'],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  }
}
