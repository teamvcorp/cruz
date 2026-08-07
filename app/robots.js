import { SITE } from '@/app/lib/site'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // /_next/static is fingerprinted build output with no indexable
        // content; /api/ is reserved for future server routes.
        disallow: ['/api/'],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  }
}
