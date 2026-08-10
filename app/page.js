import Image from 'next/image'
import Link from 'next/link'
import {
  BoltIcon,
  BuildingOffice2Icon,
  WrenchScrewdriverIcon,
  VideoCameraIcon,
  CpuChipIcon,
  StarIcon,
  PhoneIcon,
} from '@heroicons/react/24/solid'
import { SITE, quoteMailto, serviceAreas } from '@/app/lib/site'
import { locations } from '@/app/lib/locations'
import FaqAccordion from '@/app/components/FaqAccordion'
import GoogleReviews from '@/app/components/GoogleReviews'
import BottomCTA from '@/app/components/BottomCTA'
import Section from '@/app/components/ui/Section'
import SectionHeading from '@/app/components/ui/SectionHeading'
import Card from '@/app/components/ui/Card'
import Stat from '@/app/components/ui/Stat'
import Button from '@/app/components/ui/Button'

const services = [
  {
    title: 'Residential',
    href: '/gallary/residential',
    barClass: 'bg-cruz-blue',
    icon: BoltIcon,
    imageSrc: '/residential.jpg',
    description:
      'Home electrical repair, panel and service upgrades, rewiring, lighting, outlets and GFCI protection. Our residential electricians work in houses of every age across northwest Iowa.',
  },
  {
    title: 'Commercial',
    href: '/gallary/commercial',
    barClass: 'bg-cruz-dark-blue',
    icon: BuildingOffice2Icon,
    imageSrc: '/commercial.jpg',
    description:
      'Three-phase power, storefront and office wiring, parking lot lighting, commercial panel upgrades and code compliance — scheduled around your business day, not ours.',
  },
  {
    title: 'Agricultural',
    href: '/gallary/agricultural',
    barClass: 'bg-cruz-ink',
    icon: WrenchScrewdriverIcon,
    imageSrc: '/agricultural.jpg',
    description:
      'Grain systems, livestock buildings, machine sheds and farmstead services. We size services for the equipment actually installed, not what was there when the yard was first wired.',
  },
  {
    title: 'Communications',
    href: '/gallary/communications',
    barClass: 'bg-cruz-red',
    icon: VideoCameraIcon,
    imageSrc: '/communications.jpg',
    description:
      'Security cameras, data cabling and low-voltage systems, installed by licensed electricians rather than left as an afterthought.',
  },
  {
    title: 'Generators',
    href: '/gallary/generator',
    barClass: 'bg-cruz-blue-grey',
    icon: CpuChipIcon,
    imageSrc: '/generator.jpg',
    description:
      'Certified Generac installation and service. When the power goes out at the end of a rural line, a standby generator keeps the well, the sump and the livestock running.',
  },
]

const testimonials = [
  {
    name: 'Laurie Rasmussen',
    text: 'Cruz electric installed a stand-by generator for me. They had the estimate and installation done in a very timely manner. He also helped me download the app on my phone. He did a thorough explanation of how the generator works and went through the whole process of what happens when electricity goes out and comes back on again. Very satisfied with the work and follow up maintenance schedule and that the work area left clean. Good Job.',
  },
  {
    name: 'Bud and LuAnn',
    text: 'Isaac Cruz and his crew with Cruz Electric installed electricity to a building in our backyard. They were quick to respond to our inquiry with an estimate, scheduled the work when it was convenient with our travel plans and their schedule. They called Iowa One Call for utility locations. Cruz Electric came when they said they would come!! Everyone on the crew was friendly, kind, efficient and completed the job with superior work! We highly recommend Isaac Cruz and Cruz Electric for any of your electrical needs.',
  },
  {
    name: 'Erin Smith',
    text: 'Cruz electrical was very professional! They were easy to work with and I felt confident they could handle anything I threw at them. Would definitely call them again.',
  },
  {
    name: 'David Orthman',
    text: "I am very pleased with the work that Cruz Electric did for me installing my Generac generator. Though I obviously hope I don't need to use it I am confident it will take care of all my electrical needs if I do.",
  },
  {
    name: 'Cat R',
    text: "Wonderful experience! They got an old house all fixed up. Fixed outside lighting that hadn't worked in over a decade. Couldn't be happier!",
  },
]

const faqs = [
  {
    question: 'What areas does your electrician service cover?',
    answer:
      'Our electricians serve Storm Lake, Cherokee, Aurelia, Larrabee, and all surrounding communities in Buena Vista County and Cherokee County, Iowa. We proudly provide residential electrician services, commercial electrician services, and agricultural electrician services throughout northwest Iowa. If you\'re searching for an "electrician near me," we\'re your local electrical contractor.',
  },
  {
    question: 'Are your electricians licensed and insured?',
    answer:
      'Yes! All Cruz Electric electricians are fully licensed and insured. We are a licensed electrical contractor that takes pride in meeting all safety standards and legal requirements. Our professional electricians comply with all Iowa electrical codes to give our customers complete peace of mind.',
  },
  {
    question: 'What types of electrical services do your electricians offer?',
    answer:
      'Our electricians offer a wide range of electrical services including residential electrical repair, commercial electrical services, agricultural electrical systems, communications and low-voltage solutions (including security cameras), emergency electrical repair, electrical panel upgrades, outlet and switch installation, lighting installation and repair, and Generac generator installation. Whether you need a residential electrician, commercial electrician, or emergency electrician, we have you covered.',
  },
  {
    question: 'How do I choose a good electrician?',
    answer:
      'When choosing an electrician, look for a licensed and insured electrical contractor with local experience, positive customer reviews, and transparent pricing. Cruz Electric is a locally-owned electrical contractor with 5+ years of experience, 5-star reviews, and certified electricians trained to handle all types of electrical work. We provide free estimates and stand behind our electrical services with a satisfaction guarantee.',
  },
  {
    question: 'Do your electricians install Generac generators?',
    answer:
      'Yes! Our electricians specialize in the installation of Generac generators. Our skilled electricians are trained and certified to install Generac generators to the highest standards of safety and efficiency, providing uninterrupted power supply for your home or business. We are authorized Generac generator installers.',
  },
  {
    question: 'How can I request an electrician quote?',
    answer:
      "You can request a quote from our electricians by calling us at (712) 299-7004 or by emailing us at cruzelectric712@gmail.com. Our electricians respond quickly to all inquiries and are happy to provide a free estimate for your electrical project. Whether you need an emergency electrician or scheduled electrical service, we're here to help.",
  },
  {
    question: 'Do you offer an electrician apprenticeship program?',
    answer:
      'Yes! Ask us about our electrician apprenticeship program. We are committed to training the next generation of skilled electricians and welcome inquiries from those interested in starting a career as a professional electrician in the electrical trade.',
  },
]

/** Generated from the same array the accordion renders, so the markup can
 *  never disagree with the visible text. */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  '@id': `${SITE.url}/#business`,
  name: SITE.name,
  review: testimonials.map((t) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: t.name },
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    reviewBody: t.text,
  })),
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema).replace(/</g, '\\u003c') }}
      />

      {/* ---------------- Hero ---------------- */}
      <div className="relative isolate overflow-hidden bg-cruz-ink">
        <Image
          src="/hero.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          quality={70}
          priority
          fetchPriority="high"
          className="-z-20 object-cover"
        />
        {/* Darker than the old brightness-50: condensed display type at this
            size needs real separation from the photograph underneath. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-br from-cruz-ink/95 via-cruz-ink/75 to-cruz-dark-blue/60"
        />

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-sm bg-cruz-yellow px-3.5 py-2 font-display text-sm font-extrabold uppercase tracking-wider text-cruz-ink">
              <BoltIcon className="h-4 w-4" aria-hidden="true" />
              Licensed &amp; insured · since {SITE.foundingDate}
            </p>

            <h1 className="mt-5 text-balance font-display text-6xl font-extrabold uppercase leading-[0.9] text-white sm:text-7xl lg:text-8xl">
              Your local
              <span className="block text-cruz-yellow">electrician</span>
            </h1>

            <div className="my-6 h-1.5 w-32 bg-cruz-red" aria-hidden="true" />

            <p className="max-w-2xl text-lg leading-8 text-gray-200">
              Residential, commercial and farm electrical work across Buena Vista and Cherokee
              Counties. Panel upgrades, generators, rewires and emergency repair — from a licensed
              electrical contractor who actually answers the phone.
            </p>

            <p className="mt-6 font-display text-sm font-bold uppercase tracking-[0.14em] text-cruz-yellow">
              Storm Lake · Cherokee · Aurelia · Larrabee
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

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-2 border-t border-white/15 pt-5 text-sm text-gray-300">
              <span>
                <b className="font-bold text-white">5.0</b> Google rating
              </span>
              <span>
                <b className="font-bold text-white">Generac</b> certified installer
              </span>
              <span>
                <b className="font-bold text-white">Free</b> estimates
              </span>
            </div>
          </div>
        </div>
        <div className="hazard-stripe" aria-hidden="true" />
      </div>

      {/* ---------------- Services ---------------- */}
      <Section tone="muted" space="md">
        <SectionHeading
          eyebrow="What we do"
          title="Every job, wired to code"
          intro="Five service areas, one licensed crew. Our certified electricians handle all types of electrical work across northwest Iowa."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Card key={service.title} tone="white" pad="none" className="group">
              <div
                className={`${service.barClass} flex items-center justify-between gap-3 px-5 py-3`}
              >
                <h3 className="flex items-center gap-2.5 font-display text-xl font-extrabold uppercase tracking-wide text-white">
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                  {service.title}
                </h3>
                {/* Numbered because this is a fixed catalogue repeated in the
                    same order sitewide, not decoration. */}
                <span className="font-display text-sm tracking-[0.12em] text-white/80 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={service.imageSrc}
                  alt={`${service.title} electrical work by Cruz Electric`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-5">
                <p className="flex-1 text-sm leading-6 text-gray-600">{service.description}</p>
                <Link
                  href={service.href}
                  className="font-display text-base font-extrabold uppercase tracking-wide text-cruz-blue hover:text-cruz-dark-blue"
                >
                  See the work <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ---------------- Trust band ---------------- */}
      <Section tone="ink" space="sm">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <Stat value="5+" label="Years serving NW Iowa" />
          <Stat value="100%" label="Licensed &amp; insured" />
          <Stat value="5.0" label="Google review average" />
          <Stat value="24/7" label="Emergency call-out" />
        </div>
      </Section>

      {/* ---------------- Local electrician / keyword section ---------------- */}
      <Section tone="white" space="md">
        <SectionHeading
          eyebrow="Electrician near me"
          title="Your trusted local electrician"
          intro="When you search for an electrician near you, Cruz Electric is the local answer. Our licensed electricians cover every kind of electrical work."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card tone="muted" pad="lg" className="border-l-4 border-cruz-blue">
            <h3 className="font-display text-2xl font-bold uppercase text-gray-900">
              Residential electrician
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Home electrical repairs, outlet installation, lighting upgrades, panel replacements,
              circuit breaker repairs, whole house rewiring, GFCI installation, ceiling fan
              installation, and all residential electrical needs.
            </p>
          </Card>
          <Card tone="muted" pad="lg" className="border-l-4 border-cruz-dark-blue">
            <h3 className="font-display text-2xl font-bold uppercase text-gray-900">
              Commercial electrician
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Commercial electrical installations, parking lot lighting, storefront electrical,
              office wiring, electrical code compliance, three-phase power, commercial panel
              upgrades, and business electrical systems.
            </p>
          </Card>
          <Card tone="muted" pad="lg" className="border-l-4 border-cruz-red">
            <h3 className="font-display text-2xl font-bold uppercase text-gray-900">
              Emergency electrician
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              24/7 emergency electrical repair, power outage troubleshooting, electrical fire
              prevention, circuit breaker tripping issues, no power problems, electrical safety
              inspections, and urgent electrical repairs.
            </p>
          </Card>
        </div>
      </Section>

      {/* ---------------- About ---------------- */}
      <div id="about" className="relative isolate overflow-hidden bg-cruz-dark-blue">
        <Image
          src="/header.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-cruz-dark-blue/90" />
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionHeading
            eyebrow="About your local electrician"
            title="We cruise right through it"
            tone="light"
            intro={`Cruz Electric opened in ${SITE.foundingDate} in Cherokee, Iowa. As a licensed electrician and professional electrical contractor, we have expanded to serve Storm Lake, Aurelia, Larrabee, and all surrounding communities throughout Buena Vista County and Cherokee County. Whether you need an emergency electrician, residential electrician, commercial electrician, or agricultural electrical services, we are dedicated to serving our community with excellent, reliable electrical work.`}
          />
        </div>
      </div>

      {/* ---------------- Reviews: curated + live ---------------- */}
      <Section tone="white" space="md" className="scroll-mt-28" id="reviews">
        <SectionHeading
          eyebrow="What customers say"
          title="Five stars, five years running"
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((review) => (
            <Card key={review.name} tone="muted" pad="md" className="border-t-4 border-cruz-blue">
              <div className="flex gap-x-1" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-cruz-yellow" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1">
                <p className="text-sm leading-6 text-gray-700">&ldquo;{review.text}&rdquo;</p>
              </blockquote>
              <p className="mt-4 border-t border-gray-200 pt-4 text-sm font-bold text-gray-900">
                {review.name}
              </p>
            </Card>
          ))}
        </div>

        {/* Renders only once a Place ID and API key are configured. */}
        <div className="mt-10">
          <GoogleReviews />
        </div>
      </Section>

      {/* ---------------- Service areas ---------------- */}
      <Section tone="muted" space="md">
        <SectionHeading
          eyebrow="Service areas"
          title="Proudly serving northwest Iowa"
          intro="Cruz Electric covers Buena Vista County, Cherokee County and the communities around them. Each area has its own page with the work we do there."
        />
        <ul role="list" className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => (
            <li key={loc.slug}>
              <Link
                href={`/locations/${loc.slug}`}
                className="flex h-full flex-col gap-1 rounded-sm border-l-4 border-cruz-yellow bg-white p-5 ring-1 ring-gray-200 transition-shadow hover:shadow-md"
              >
                <span className="font-display text-xl font-bold uppercase text-gray-900">
                  {loc.name}, IA
                </span>
                <span className="text-sm text-gray-500">
                  {loc.type === 'county' ? 'County-wide service' : loc.county}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-gray-600">
          We also serve Alta, Newell, Marcus, Quimby, Washta, Sioux Rapids, Cleghorn and more
          throughout northwest Iowa.
        </p>
      </Section>

      {/* ---------------- FAQ ---------------- */}
      <Section tone="white" space="md">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <FaqAccordion faqs={faqs} />
        </div>
      </Section>

      {/* ---------------- Apprenticeship ---------------- */}
      <Section tone="ink" space="sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
              Ask about our apprenticeship program
            </h2>
            <p className="mt-3 text-base leading-7 text-gray-300">
              We&rsquo;re committed to training the next generation of skilled electricians. If
              you&rsquo;re looking to start in the trade, get in touch.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <Button href={SITE.phoneHref} variant="bolt" size="md">
              Call us today
            </Button>
            <Button
              href={`mailto:${SITE.email}?subject=Apprenticeship Program Inquiry`}
              variant="ghost"
              size="md"
            >
              Learn more <span aria-hidden="true">&rarr;</span>
            </Button>
          </div>
        </div>
      </Section>

      <BottomCTA />
    </>
  )
}
