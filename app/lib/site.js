/**
 * Single source of truth for business identity, navigation, and structured data.
 *
 * Why this file exists: local SEO depends on NAP consistency (Name, Address,
 * Phone appearing IDENTICALLY everywhere -- on the site, in schema.org markup,
 * and on your Google Business Profile). When those strings are copy-pasted into
 * a dozen page files they drift, and Google stops treating them as the same
 * business. Defining them once makes drift impossible.
 */

/**
 * PRODUCTION DOMAIN — the single most damaging value in this file to get wrong.
 *
 * It drives metadataBase, every canonical, og:url, the sitemap, robots.txt's
 * Host directive and the JSON-LD @id. If it names a domain the site is not
 * actually served from, every page tells Google "the real version of me lives
 * over there" — which is an explicit instruction to de-index this one.
 *
 * That is not hypothetical. This was 'https://cruzelectric.com' until
 * 2026-08-09 while the site was in fact served from electricbycruz.com, and
 * the site dropped out of search results because of it. cruzelectric.com is a
 * different site entirely and 404s on these paths.
 *
 * Overridable by env so it can be corrected without a code change, but the
 * default must always be the real production domain.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://electricbycruz.com')
  .trim()
  .replace(/\/+$/, '') // never allow a trailing slash — it doubles up in URLs

export const SITE = {
  name: 'Cruz Electric',
  legalName: 'Cruz Electric',
  url: SITE_URL,

  // NAP -- keep these byte-identical to the Google Business Profile.
  phoneDisplay: '(712) 299-7004',
  phoneHref: 'tel:+17122997004',
  phoneE164: '+17122997004',
  email: 'cruzelectric712@gmail.com',

  address: {
    locality: 'Storm Lake',
    region: 'IA',
    postalCode: '50588',
    country: 'US',
  },
  geo: { lat: '42.6411', lng: '-95.2094' },

  foundingDate: '2020',
  ogImage: '/og-image.jpg',
}

/** Prebuilt mailto: link so the subject line stays consistent site-wide. */
export const quoteMailto = `mailto:${SITE.email}?subject=Please reach out to me for a quote`

export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Residential', href: '/gallary/residential' },
  { name: 'Commercial', href: '/gallary/commercial' },
  { name: 'Agricultural', href: '/gallary/agricultural' },
  { name: 'Communications', href: '/gallary/communications' },
  { name: 'Generators', href: '/gallary/generator' },
]

export const footerNavigation = {
  services: [
    { name: 'Residential', href: '/gallary/residential' },
    { name: 'Commercial', href: '/gallary/commercial' },
    { name: 'Agricultural', href: '/gallary/agricultural' },
    { name: 'Communications', href: '/gallary/communications' },
    { name: 'Generator Install', href: '/gallary/generator' },
  ],
  company: [
    { name: 'About Us', href: '/#about' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'Gallery', href: '/gallary' },
    { name: 'Electrician Services', href: '/electrician' },
  ],
  contact: [
    { name: SITE.phoneDisplay, href: SITE.phoneHref },
    { name: SITE.email, href: `mailto:${SITE.email}` },
    { name: 'Storm Lake & Cherokee, IA', href: '/locations/storm-lake' },
  ],
}

/** Cities and counties served -- drives both the schema and the sitemap. */
export const serviceAreas = [
  { type: 'City', name: 'Storm Lake', slug: 'storm-lake' },
  { type: 'City', name: 'Cherokee', slug: 'cherokee' },
  { type: 'City', name: 'Aurelia', slug: 'aurelia' },
  { type: 'City', name: 'Larrabee', slug: 'larrabee' },
  { type: 'AdministrativeArea', name: 'Buena Vista County', slug: 'buena-vista-county' },
  { type: 'AdministrativeArea', name: 'Cherokee County', slug: 'cherokee-county' },
]

const SERVICES_OFFERED = [
  ['Residential Electrical Repair', 'Expert residential electrical repair and installation services'],
  ['Commercial Electrical Services', 'Professional commercial electrical repair and installation'],
  ['Agricultural Electrical Services', 'Specialized agricultural electrical systems and repairs'],
  ['Generator Installation', 'Generac generator sales, installation, and maintenance'],
  ['Security Camera Installation', 'Low-voltage communications and security camera systems'],
  ['Electrical Service Upgrades', 'Electrical panel upgrades and service installations'],
  ['Emergency Electrical Repair', '24/7 emergency electrical repair services'],
]

/**
 * schema.org Electrician (a subtype of LocalBusiness) describing the business.
 *
 * The "@id" is the stable identifier Google uses to tie this markup to your
 * Google Business Profile, so it must never change once indexed.
 */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  '@id': `${SITE.url}/#business`,
  name: `${SITE.name} - Professional Electrician`,
  image: `${SITE.url}${SITE.ogImage}`,
  logo: `${SITE.url}/headerplain.png`,
  description:
    'Professional electrician and licensed electrical contractor providing residential, commercial, and agricultural electrical services including electrical repairs, electrical installations, panel upgrades, and Generac generator installations throughout northwest Iowa.',
  url: SITE.url,
  telephone: SITE.phoneE164,
  email: SITE.email,
  priceRange: '$$',
  foundingDate: SITE.foundingDate,
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  areaServed: serviceAreas.map((a) => ({
    '@type': a.type,
    name: a.name,
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'IA',
      addressCountry: 'US',
    },
  })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
  ],
  // Add the Google Business Profile and any social URLs here when available --
  // sameAs is one of the strongest signals tying this markup to that profile.
  sameAs: [],
  /*
    NO aggregateRating here, deliberately.

    Google: "If the entity that's being reviewed controls the reviews about
    itself, their pages that use LocalBusiness or any other type of
    Organization structured data are ineligible for star review feature." That
    covers testimonials published on your own site and Google reviews embedded
    via a widget alike -- so a self-declared aggregateRating can never render
    stars, and it is the element most associated with spammy-markup manual
    actions. The individual Review objects on the homepage stay: they are
    truthful, and they help AI/LLM search summarise the business.

    Real star ratings come from the Google Business Profile, not from here.
  */
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Electrical Services',
    itemListElement: SERVICES_OFFERED.map(([name, description]) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name, description },
    })),
  },
}

/**
 * Helper for page-level metadata. Every page MUST pass its own path so Next
 * emits a self-referencing canonical -- previously a hardcoded canonical in the
 * layout pointed every page at the homepage, which told Google to drop them.
 */
export function pageMetadata({ title, description, path, keywords }) {
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE.name,
      locale: 'en_US',
      type: 'website',
      images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: `${SITE.name} - licensed electrician` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [SITE.ogImage],
    },
  }
}
