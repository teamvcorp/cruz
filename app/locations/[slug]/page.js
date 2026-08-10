import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MapPinIcon, PhoneIcon, BoltIcon } from '@heroicons/react/24/solid'
import { SITE, pageMetadata, localBusinessSchema, quoteMailto } from '@/app/lib/site'
import { locations, getLocation } from '@/app/lib/locations'
import Section from '@/app/components/ui/Section'
import SectionHeading from '@/app/components/ui/SectionHeading'
import Card from '@/app/components/ui/Card'
import Button from '@/app/components/ui/Button'
import ServiceChecklist from '@/app/components/ServiceChecklist'
import BottomCTA from '@/app/components/BottomCTA'

/**
 * One route replaces six near-identical page files.
 *
 * The URLs are unchanged (/locations/storm-lake and so on) and every page is
 * still prerendered at build time via generateStaticParams -- this is purely
 * removing the copy-paste, while app/lib/locations.js supplies the genuinely
 * different content each town needs.
 *
 * Note the `await params`: from Next 16 these are Promises and synchronous
 * access has been removed entirely.
 */

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const loc = getLocation(slug)
  if (!loc) return {}
  return pageMetadata({
    title: loc.title,
    description: loc.description,
    keywords: loc.keywords,
    path: `/locations/${loc.slug}`,
  })
}

export default async function LocationPage({ params }) {
  const { slug } = await params
  const loc = getLocation(slug)
  if (!loc) notFound()

  const isCounty = loc.type === 'county'

  // Location-specific business schema. areaServed is narrowed to this place so
  // each page describes the service area it is actually about.
  const schema = {
    ...localBusinessSchema,
    '@id': `${SITE.url}/locations/${loc.slug}#business`,
    url: `${SITE.url}/locations/${loc.slug}`,
    description: loc.description,
    areaServed: [
      {
        '@type': isCounty ? 'AdministrativeArea' : 'City',
        name: loc.name,
        address: { '@type': 'PostalAddress', addressRegion: 'IA', addressCountry: 'US' },
      },
      ...loc.nearbyTowns.map((t) => ({
        '@type': 'City',
        name: t,
        address: { '@type': 'PostalAddress', addressRegion: 'IA', addressCountry: 'US' },
      })),
    ],
    geo: { '@type': 'GeoCoordinates', latitude: loc.lat, longitude: loc.lng },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />

      {/* Hero */}
      <div className="relative isolate overflow-hidden bg-cruz-dark-blue">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 flex items-center gap-x-2 font-display text-sm font-bold uppercase tracking-[0.14em] text-cruz-yellow">
              <MapPinIcon className="h-5 w-5" aria-hidden="true" />
              {isCounty ? 'Serving all of' : loc.county}
            </p>
            <h1 className="text-balance font-display text-5xl font-extrabold uppercase leading-[0.92] text-white sm:text-6xl lg:text-7xl">
              Electrician in
              <br />
              {loc.name}, Iowa
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">{loc.intro}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={SITE.phoneHref} variant="bolt" size="lg">
                <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                Call {SITE.phoneDisplay}
              </Button>
              <Button href={quoteMailto} variant="ghost" size="lg">
                Request a quote
              </Button>
            </div>
          </div>
        </div>
        <div className="hazard-stripe" aria-hidden="true" />
      </div>

      {/* What makes this page unique. Deliberately the first thing after the
          hero -- this is the content that stops the six location pages being
          doorway pages, so it gets prime position rather than being buried. */}
      <Section tone="white" space="md">
        <SectionHeading
          eyebrow={`Electrical work in ${loc.name}`}
          title={`What we actually run into here`}
        />
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {loc.localNotes.map((note) => (
            <Card key={note.heading} tone="muted" pad="lg" className="border-l-4 border-cruz-yellow">
              <h3 className="font-display text-2xl font-bold uppercase leading-tight text-gray-900">
                {note.heading}
              </h3>
              <p className="mt-3 text-base leading-7 text-gray-600">{note.body}</p>
            </Card>
          ))}
        </div>

        {loc.featuredWork && !loc.featuredWork.pending && (
          <Card tone="muted" pad="lg" className="mt-8 border-l-4 border-cruz-blue">
            <h3 className="font-display text-2xl font-bold uppercase text-gray-900">
              Recent work in {loc.name}
            </h3>
            <p className="mt-3 text-base leading-7 text-gray-600">{loc.featuredWork.text}</p>
          </Card>
        )}
      </Section>

      {/* Services, ordered for this location */}
      <Section tone="ink" space="md">
        <SectionHeading
          eyebrow="Services"
          title={`What we do in ${loc.name}`}
          intro={`The work we are called out for most in ${loc.name}, in roughly that order.`}
          tone="light"
        />
        <div className="mt-10">
          <ServiceChecklist services={loc.services} tone="light" />
        </div>
      </Section>

      {/* Nearby towns — genuine internal linking, and it differs per page */}
      <Section tone="muted" space="md">
        <SectionHeading
          eyebrow="Also nearby"
          title={isCounty ? 'Towns across the county' : 'Communities we serve nearby'}
        />
        <ul role="list" className="mt-8 flex flex-wrap gap-2.5">
          {loc.nearbyTowns.map((town) => {
            const linked = locations.find((l) => l.name === town)
            const cls =
              'inline-flex items-center gap-1.5 rounded-sm bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 ring-1 ring-gray-200'
            return (
              <li key={town}>
                {linked ? (
                  <Link href={`/locations/${linked.slug}`} className={`${cls} hover:ring-cruz-blue`}>
                    <BoltIcon className="h-4 w-4 text-cruz-yellow" aria-hidden="true" />
                    {town}, IA
                  </Link>
                ) : (
                  <span className={cls}>
                    <BoltIcon className="h-4 w-4 text-cruz-yellow" aria-hidden="true" />
                    {town}, IA
                  </span>
                )}
              </li>
            )
          })}
        </ul>
      </Section>

      <BottomCTA
        title={`Need an electrician in ${loc.name}?`}
        body={`Licensed, insured and based right here in ${loc.county}. Free estimates on every job.`}
      />
    </>
  )
}
