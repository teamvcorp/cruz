/** @type {import('next').NextConfig} */

/**
 * Security response headers.
 *
 * Note on CSP: a strict script-src policy would need per-request nonces, which
 * forces every page out of static generation and into dynamic rendering -- a
 * real load-speed cost for a marketing site. We therefore ship the headers that
 * are free, plus a frame-ancestors CSP (clickjacking protection only, no effect
 * on script execution) rather than a full policy.
 */
const securityHeaders = [
  // Tell browsers to only ever reach this origin over HTTPS.
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  // Stop the browser guessing a response's type (MIME-confusion attacks).
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Clickjacking: modern browsers honour frame-ancestors, older ones XFO.
  { key: 'Content-Security-Policy', value: "frame-ancestors 'self'" },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  // Send the full URL same-origin, origin-only cross-origin, nothing on downgrade.
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Drop powerful APIs this site never uses.
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
]

const nextConfig = {
  // Don't advertise the framework/version to attackers scanning for CVEs.
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,

  images: {
    // AVIF first (roughly 30% smaller than WebP), WebP as the fallback, and
    // the original format for anything that supports neither. next/image
    // content-negotiates per request.
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // 16 was dropped from Next 16's defaults: devicePixelRatio 2 means a 16px
    // slot actually fetches the 32px candidate, so the entry only bloated
    // every srcset. Nothing here renders below 32px.
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    // Next 16 changed the default to [75] and coerces any other value to the
    // nearest allowed one. Without this, the hero's quality={70} and the
    // carousel's quality={78} would be silently rewritten to 75.
    qualities: [70, 75, 78],
    // Optimised derivatives are immutable for a month; the source files only
    // change on deploy, and the URL hash changes with them.
    minimumCacheTTL: 2678400,
    // Owner uploads are served from Vercel Blob, so next/image has to be told
    // that host is allowed — with an empty remotePatterns every uploaded photo
    // is rejected with a 400.
    //
    // Scoped as tightly as the platform allows: HTTPS only, and only the
    // *.public.blob.vercel-storage.com hostname Vercel issues. A broader entry
    // (or the previous unused images.unsplash.com one) turns /_next/image into
    // an open proxy third parties can drive at your bandwidth — see advisory
    // GHSA-9g9p-9gw9-jx7f. Do not widen this.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
        pathname: '/**',
      },
    ],
  },

  async headers() {
    // Note: no Cache-Control override for /_next/static here. Next already
    // serves fingerprinted build output as immutable, and overriding it makes
    // Next warn that it can break dev behaviour.
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}

module.exports = nextConfig
