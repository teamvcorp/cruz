import Link from 'next/link'
import {
  PhoneIcon,
  ShieldCheckIcon,
  ClockIcon,
  StarIcon,
  BoltIcon,
} from '@heroicons/react/24/solid'
import { SITE, pageMetadata, quoteMailto } from '@/app/lib/site'
import { locations } from '@/app/lib/locations'
import Section from '@/app/components/ui/Section'
import SectionHeading from '@/app/components/ui/SectionHeading'
import Card from '@/app/components/ui/Card'
import Button from '@/app/components/ui/Button'
import ServiceChecklist from '@/app/components/ServiceChecklist'
import BottomCTA from '@/app/components/BottomCTA'

export const metadata = pageMetadata({
  title: 'Professional Electrician | Electrical Contractor | Cruz Electric',
  description:
    'Experienced electrician providing expert electrical services. Licensed electrician for residential, commercial & agricultural electrical repair, installation & service. Call (712) 299-7004.',
  keywords:
    'electrician, professional electrician, licensed electrician, electrical contractor, residential electrician, commercial electrician, emergency electrician, electrician near me, certified electrician, local electrician, electrical services, electrical repair, electrical installation',
  path: '/electrician',
})

const services = [
  'Residential electrical services',
  'Commercial electrical services',
  'Agricultural electrical systems',
  'Emergency electrical repair',
  'Electrical panel upgrades',
  'Circuit breaker repair & replacement',
  'Outlet & switch installation',
  'Lighting installation & repair',
  'Ceiling fan installation',
  'GFCI outlet installation',
  'Electrical troubleshooting',
  'Electrical safety inspections',
  'Generac generator installation',
  'Security camera installation',
  'Whole house rewiring',
  'Electrical code compliance',
  'Three-phase power installation',
  'Parking lot lighting',
]

const features = [
  {
    title: 'Licensed & insured',
    description:
      'All our electricians are fully licensed and insured, meeting all Iowa electrical codes and safety standards.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Fast response',
    description:
      'Need an electrician fast? We provide prompt electrical service with same-day and emergency electrician services available.',
    icon: ClockIcon,
  },
  {
    title: '5-star rated',
    description:
      'Our professional electricians are highly rated by customers. We deliver quality electrical workmanship on every job.',
    icon: StarIcon,
  },
  {
    title: 'Every kind of job',
    description:
      'From simple electrical repairs to complete electrical installations, our electricians handle all types of electrical work.',
    icon: BoltIcon,
  },
]

const kinds = [
  {
    title: 'Residential electrician',
    body: 'Home electrical repair, panel upgrades, rewiring, lighting, outlets and GFCI protection for houses of every age.',
    href: '/gallary/residential',
    linkText: 'See residential work',
    accent: 'border-cruz-blue',
  },
  {
    title: 'Commercial electrician',
    body: 'Three-phase power, storefront and office wiring, parking lot lighting, panel upgrades and code compliance.',
    href: '/gallary/commercial',
    linkText: 'See commercial work',
    accent: 'border-cruz-dark-blue',
  },
  {
    title: 'Emergency electrician',
    body: 'Power outages, tripping breakers, burning smells and dead circuits. Call us and we will get someone to you.',
    href: SITE.phoneHref,
    linkText: `Call ${SITE.phoneDisplay}`,
    accent: 'border-cruz-red',
  },
]

export default function ElectricianPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative isolate overflow-hidden bg-cruz-ink">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-sm bg-cruz-yellow px-3.5 py-2 font-display text-sm font-extrabold uppercase tracking-wider text-cruz-ink">
              <BoltIcon className="h-4 w-4" aria-hidden="true" />
              Licensed &amp; insured
            </p>
            <h1 className="mt-5 text-balance font-display text-5xl font-extrabold uppercase leading-[0.92] text-white sm:text-6xl lg:text-7xl">
              Professional
              <span className="block text-cruz-yellow">electrician</span>
            </h1>
            <div className="my-6 h-1.5 w-32 bg-cruz-red" aria-hidden="true" />
            <p className="max-w-2xl text-lg leading-8 text-gray-200">
              Cruz Electric is a licensed electrical contractor serving homes, businesses and farms
              across northwest Iowa. Whatever the job, it gets done to code by an electrician who
              will explain what they did and why.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={SITE.phoneHref} variant="primary" size="lg">
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

      {/* Why choose us */}
      <Section tone="white" space="md">
        <SectionHeading
          eyebrow="Why choose us"
          title="Electrical work you can trust"
          intro="Five years of work across Buena Vista and Cherokee Counties, and a reputation we would rather not spend."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} tone="muted" pad="lg" className="border-l-4 border-cruz-yellow">
              <feature.icon className="h-8 w-8 text-cruz-blue" aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-bold uppercase text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Full service list */}
      <Section tone="ink" space="md">
        <SectionHeading
          eyebrow="Services"
          title="Complete electrician services"
          intro="If it carries current, we work on it."
          tone="light"
        />
        <div className="mt-10">
          <ServiceChecklist services={services} tone="light" />
        </div>
      </Section>

      {/* Types of electrician */}
      <Section tone="white" space="md">
        <SectionHeading eyebrow="Specialisms" title="What kind of electrician do you need?" />
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {kinds.map((kind) => (
            <Card key={kind.title} tone="muted" pad="lg" className={`border-l-4 ${kind.accent}`}>
              <h3 className="font-display text-2xl font-bold uppercase text-gray-900">
                {kind.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">{kind.body}</p>
              <Link
                href={kind.href}
                className="mt-5 font-display text-base font-extrabold uppercase tracking-wide text-cruz-blue hover:text-cruz-dark-blue"
              >
                {kind.linkText} <span aria-hidden="true">&rarr;</span>
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* Service areas */}
      <Section tone="muted" space="md">
        <SectionHeading
          eyebrow="Where we work"
          title="A local electrician, genuinely local"
          intro="Based in Cherokee County and covering the communities around it. Each area has its own page describing the work we actually do there."
        />
        <ul role="list" className="mt-10 flex flex-wrap gap-2.5">
          {locations.map((loc) => (
            <li key={loc.slug}>
              <Link
                href={`/locations/${loc.slug}`}
                className="inline-flex items-center gap-1.5 rounded-sm bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 transition hover:ring-cruz-blue"
              >
                <BoltIcon className="h-4 w-4 text-cruz-yellow" aria-hidden="true" />
                {loc.name}, IA
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <BottomCTA
        title="Need an electrician?"
        body="Free estimates, licensed and insured, and a real person on the phone."
      />
    </>
  )
}
