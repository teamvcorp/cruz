import { SITE, serviceAreas } from '@/app/lib/site'

/**
 * Generated from the same config that drives the nav and footer, so a page can
 * never be added to the site and silently left out of the sitemap.
 *
 * `lastModified` is stamped at build time. That is correct here: the site is
 * fully static, so a build IS the last modification.
 */
export default function sitemap() {
  const lastModified = new Date()

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/electrician', priority: 0.9, changeFrequency: 'weekly' },
    ...serviceAreas.map((a) => ({
      path: `/locations/${a.slug}`,
      priority: 0.9,
      changeFrequency: 'monthly',
    })),
    { path: '/gallary', priority: 0.7, changeFrequency: 'monthly' },
    ...['residential', 'commercial', 'agricultural', 'communications', 'generator'].map((g) => ({
      path: `/gallary/${g}`,
      priority: 0.6,
      changeFrequency: 'monthly',
    })),
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
