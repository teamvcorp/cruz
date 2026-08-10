import './globals.css'
import { Lato, Barlow_Condensed } from 'next/font/google'
import SiteHeader from '@/app/components/SiteHeader'
import SiteFooter from '@/app/components/SiteFooter'
import { SITE, localBusinessSchema } from '@/app/lib/site'

/**
 * Self-hosted via next/font instead of the previous @import of
 * fonts.googleapis.com inside globals.css. That @import was render-blocking and
 * cost two extra DNS+TLS round trips before any text could paint. next/font
 * downloads the files at build time, serves them same-origin, and emits
 * size-adjust descriptors so the fallback swap causes no layout shift.
 */
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-lato',
})

/**
 * Display face. Condensed to echo the logo's varsity letterforms, which Lato
 * cannot do at any weight. Only 700/800 are loaded and only the latin subset,
 * so the cost is roughly one 22 KB woff2 per weight -- a deliberate trade for
 * brand fit, and still far cheaper than the render-blocking @import it
 * replaced.
 */
const display = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800'],
  display: 'swap',
  variable: '--font-display',
})

export const metadata = {
  // Resolves every relative URL below (og:image, canonicals) to an absolute
  // one. Without it Next warned on each build and fell back to localhost:3000.
  metadataBase: new URL(SITE.url),
  title:
    'Electrician in Storm Lake, Cherokee, Aurelia & Larrabee IA | Licensed Electrical Contractor | Cruz Electric',
  description:
    'Professional electrician providing electrical repair, installation & service in Storm Lake, Cherokee, Aurelia, Larrabee & all Buena Vista/Cherokee Counties IA. Licensed electrician for residential, commercial & agricultural. Call (712) 299-7004.',
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,

  // Self-referencing canonical for the homepage ONLY. Each page sets its own
  // via pageMetadata(). The previous hardcoded <link rel="canonical"> in the
  // layout head pointed EVERY page at the homepage, which instructed Google to
  // treat all location and gallery pages as duplicates and drop them.
  alternates: { canonical: '/' },

  openGraph: {
    type: 'website',
    title:
      'Professional Electrician | Storm Lake, Cherokee, Aurelia & Larrabee IA | Cruz Electric',
    description:
      'Trusted electrician providing electrical repair, installation & service in Storm Lake, Cherokee, Aurelia, Larrabee & surrounding Iowa areas. Licensed & insured electrical contractor.',
    url: '/',
    siteName: SITE.name,
    locale: 'en_US',
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: 'Cruz Electric - licensed electrician serving northwest Iowa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Electrician | Storm Lake, Cherokee, Aurelia & Larrabee IA',
    description:
      'Professional electrician providing electrical services in Storm Lake, Cherokee, Aurelia & Larrabee IA. Licensed & insured. Call (712) 299-7004',
    images: [SITE.ogImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  // Non-standard tags Next has no first-class field for.
  other: {
    'geo.region': 'US-IA',
    'geo.placename': 'Storm Lake, Aurelia, Cherokee, Larrabee',
    'geo.position': `${SITE.geo.lat};${SITE.geo.lng}`,
    ICBM: `${SITE.geo.lat}, ${SITE.geo.lng}`,
  },
}

/**
 * Next 14 wants viewport/themeColor exported separately from metadata.
 * The default width=device-width,initial-scale=1 is what makes the responsive
 * breakpoints actually apply on phones.
 */
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#005cbb',
}

export default function RootLayout({ children }) {
  return (
    // data-scroll-behavior is required from Next 16 on. globals.css sets
    // `scroll-behavior: smooth` for in-page anchor links; Next used to
    // suppress that during route changes and no longer does by default, so
    // without this attribute every navigation would smooth-scroll to the top
    // and feel sluggish.
    <html
      lang="en"
      className={`${lato.variable} ${display.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="bg-white font-sans antialiased">
        {/*
          Business identity for Google. Rendered from a single shared object so
          the NAP here can never drift from the NAP shown on the page.
          Injected as a <script> because JSON-LD is data, not executable markup;
          JSON.stringify output is escaped by React's dangerouslySetInnerHTML
          boundary only for the closing tag, so we neutralise "</" defensively.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, '\\u003c'),
          }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
