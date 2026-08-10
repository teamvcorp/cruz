import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { BoltIcon } from '@heroicons/react/24/solid'
import { empImages } from '@/app/lib/images/images'
import { pageMetadata } from '@/app/lib/site'
import { getPublishedItems, getPublishedTeam } from '@/app/lib/gallery-store'
import Section from '@/app/components/ui/Section'
import SectionHeading from '@/app/components/ui/SectionHeading'
import Card from '@/app/components/ui/Card'
import Stat from '@/app/components/ui/Stat'
import BottomCTA from '@/app/components/BottomCTA'

export const metadata = pageMetadata({
  title: 'Electrical Project Gallery & Our Team | Cruz Electric',
  description:
    'Browse completed residential, commercial, agricultural, communications and Generac generator projects by Cruz Electric, and meet our licensed electricians serving northwest Iowa.',
  keywords:
    'electrical project gallery, electrician portfolio Iowa, Cruz Electric team, licensed electricians Storm Lake IA',
  path: '/gallary',
})

const galleries = [
  { name: 'Residential', slug: 'residential', barClass: 'bg-cruz-blue' },
  { name: 'Commercial', slug: 'commercial', barClass: 'bg-cruz-dark-blue' },
  { name: 'Agricultural', slug: 'agricultural', barClass: 'bg-cruz-ink' },
  { name: 'Communications', slug: 'communications', barClass: 'bg-cruz-red' },
  { name: 'Generators', slug: 'generator', barClass: 'bg-cruz-blue-grey' },
]

/**
 * Fallback crew, shown only until the owner adds real people through /admin.
 *
 * Role-based rather than the previous "Two Dudes" / "Crew Members"
 * placeholders, but still a placeholder: real names and credentials are a far
 * stronger trust signal on a trades site than anonymous labels. Adding even
 * one person in the admin Team tab replaces this list entirely.
 */
const fallbackCrew = [
  { name: 'Owner & master electrician', note: 'Licensed master electrician, Generac certified', src: empImages[0].src, alt: empImages[0].alt },
  { name: 'Journeyman electrician', note: 'Residential and commercial installations', src: empImages[1].src, alt: empImages[1].alt },
  { name: 'Journeyman electrician', note: 'Agricultural and farmstead systems', src: empImages[2].src, alt: empImages[2].alt },
  { name: 'Electrician', note: 'Service calls and troubleshooting', src: empImages[3].src, alt: empImages[3].alt },
  { name: 'Electrician', note: 'Generator installation and service', src: empImages[4].src, alt: empImages[4].alt },
]

export default async function GalleryIndex() {
  // Counts include owner uploads from /admin so the tiles stay accurate.
  const counts = Object.fromEntries(
    await Promise.all(
      galleries.map(async (g) => [g.slug, (await getPublishedItems(g.slug)).length])
    )
  )

  // All-or-nothing: as soon as one real electrician is published, drop the
  // placeholders entirely. Mixing the two would put a named person next to an
  // anonymous "Electrician" card and read as though someone was left out.
  const managed = await getPublishedTeam()
  const crew =
    managed.length > 0
      ? managed.map((m) => ({ name: m.name, note: m.role, src: m.url, alt: m.alt }))
      : fallbackCrew

  return (
    <>
      {/* Hero */}
      <div className="relative isolate overflow-hidden bg-cruz-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="flex items-center gap-2.5 font-display text-[13px] font-bold uppercase tracking-[0.16em] text-cruz-yellow">
              <span className="h-0.5 w-[18px] flex-none bg-cruz-yellow" aria-hidden="true" />
              Our work
            </p>
            <h1 className="mt-3 text-balance font-display text-5xl font-extrabold uppercase leading-[0.92] text-white sm:text-6xl">
              Project gallery
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-200">
              Completed jobs across every service we offer, plus the crew who did them.
            </p>
          </div>
        </div>
        <div className="hazard-stripe" aria-hidden="true" />
      </div>

      {/* Gallery tiles */}
      <Section tone="muted" space="md">
        <SectionHeading eyebrow="Browse by trade" title="Pick a gallery" />
        <ul role="list" className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleries.map((gallery) => (
            <li key={gallery.slug}>
              <Link
                href={`/gallary/${gallery.slug}`}
                className={`${gallery.barClass} group flex items-center justify-between gap-3 rounded-sm px-6 py-5 text-white transition hover:brightness-110`}
              >
                <span>
                  <span className="block font-display text-2xl font-extrabold uppercase tracking-wide">
                    {gallery.name}
                  </span>
                  {counts[gallery.slug] > 0 && (
                    <span className="text-sm text-white/80">
                      {counts[gallery.slug]} recent photo{counts[gallery.slug] === 1 ? '' : 's'} added
                    </span>
                  )}
                </span>
                <ArrowRightIcon
                  className="h-6 w-6 flex-none transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Crew */}
      <Section tone="white" space="md">
        <SectionHeading
          eyebrow="Our team"
          title="Meet the electricians"
          intro="Licensed, certified and local. The same crew that quotes the job is the crew that turns up to do it."
        />
        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {crew.map((person, i) => (
            <li key={i}>
              <Card tone="muted" pad="none" className="h-full">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-200">
                  <Image
                    src={person.src}
                    alt={person.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1 border-l-4 border-cruz-yellow p-4">
                  <h3 className="font-display text-lg font-bold uppercase leading-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm text-gray-600">{person.note}</p>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      {/* Team stats */}
      <Section tone="ink" space="sm">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <Stat value="100%" label="Licensed &amp; insured" />
          <Stat value="50+" label="Years combined experience" />
          <Stat value="5.0" label="Customer rated" />
          <Stat value="2020" label="Serving Iowa since" />
        </div>
      </Section>

      <BottomCTA
        title="Want work like this?"
        body="Tell us what you need and we will get you a free estimate."
      />
    </>
  )
}
