import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "@/app/components/FaqAccordion";
import { SITE, quoteMailto } from "@/app/lib/site";
import {
  BoltIcon,
  BuildingOffice2Icon,
  WrenchScrewdriverIcon,
  VideoCameraIcon,
  CpuChipIcon,
  StarIcon,
} from '@heroicons/react/24/solid'

const services = [
  {
    title: 'Residential',
    href: '/gallary/residential',
    color: 'bg-cruz-blue',
    icon: BoltIcon,
    imageSrc: '/residential.jpg',
    description:
      'At Cruz Electric, our residential electricians specialize in providing exceptional residential electrical repair services, ensuring that your home remains a safe, functional, and comfortable space for you and your loved ones. Understanding the critical importance of a well-maintained electrical system, our licensed electricians dedicate themselves to delivering electrical solutions that address your specific needs with precision and care.',
  },
  {
    title: 'Commercial',
    href: '/gallary/commercial',
    color: 'bg-cruz-yellow',
    icon: BuildingOffice2Icon,
    imageSrc: '/commercial.jpg',
    description:
      'Cruz Electric is your trusted partner for comprehensive commercial electrical repair services. Our commercial electricians are dedicated to ensuring your business operations run smoothly and efficiently. We recognize the unique challenges and high standards required for commercial electrical systems, which is why our professional electricians offer specialized electrical repair solutions tailored to meet the demands of businesses of all sizes.',
  },
  {
    title: 'Agricultural',
    href: '/gallary/agricultural',
    color: 'bg-cruz-dark-blue',
    icon: WrenchScrewdriverIcon,
    imageSrc: '/agricultural.jpg',
    description:
      'In the dynamic and demanding world of agriculture, Cruz Electric stands out as your dependable source for specialized agricultural electrical repair services. Our agricultural electricians understand the critical role that reliable electrical systems play in the productivity and efficiency of agricultural operations, from small family farms to large agribusinesses. Our licensed electricians provide expert electrical service for all farm electrical needs.',
  },
  {
    title: 'Communications',
    href: '/gallary/communications',
    color: 'bg-cruz-red',
    icon: VideoCameraIcon,
    imageSrc: '/communications.jpg',
    description:
      'Cruz Electric excels in providing cutting-edge communications and low-voltage solutions, including the installation and repair of security cameras and other essential systems. Our certified electricians are experts in the latest technologies, ensuring your property is equipped with reliable and efficient communication networks and security measures. As professional electricians, we handle all your low-voltage electrical needs.',
  },
  {
    title: 'Generator Install',
    href: '/gallary/generator',
    color: 'bg-cruz-blue-grey',
    icon: CpuChipIcon,
    imageSrc: '/generator.jpg',
    description:
      'Cruz Electric is proud to specialize in the installation of Generac generators, offering top-tier solutions for uninterrupted power supply to homes and businesses alike. Our skilled electricians are trained and certified to install Generac generators, ensuring your installation is performed to the highest standards of safety and efficiency. As licensed electricians, we provide complete generator electrical installation and service.',
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
    text: 'I am very pleased with the work that Cruz Electric did for me installing my Generac generator. Though I obviously hope I don\'t need to use it I am confident it will take care of all my electrical needs if I do.',
  },
  {
    name: 'Cat R',
    text: 'Wonderful experience! They got an old house all fixed up. Fixed outside lighting that hadn\'t worked in over a decade. Couldn\'t be happier!',
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
      'You can request a quote from our electricians by calling us at (712) 299-7004 or by emailing us at cruzelectric712@gmail.com. Our electricians respond quickly to all inquiries and are happy to provide a free estimate for your electrical project. Whether you need an emergency electrician or scheduled electrical service, we\'re here to help.',
  },
  {
    question: 'Do you offer an electrician apprenticeship program?',
    answer:
      'Yes! Ask us about our electrician apprenticeship program. We are committed to training the next generation of skilled electricians and welcome inquiries from those interested in starting a career as a professional electrician in the electrical trade.',
  },
]

/**
 * FAQPage structured data, generated from the same `faqs` array the accordion
 * renders -- so the markup can never disagree with the visible text, which is
 * exactly what Google penalises.
 */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

/** Individual customer reviews, matching the testimonials rendered below. */
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
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema).replace(/</g, '\\u003c'),
        }}
      />

      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        {/* Background image. This is the Largest Contentful Paint element on
            the site, so it carries `priority` (preloaded, never lazy) and a
            fetchPriority hint. The source was a 437x372 file being stretched
            full-bleed; it is now a real 2400x1350 photo. */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero.jpg"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            quality={70}
            className="object-cover brightness-50"
            priority
            fetchPriority="high"
          />
        </div>

        {/* Gradient blobs */}
        <div aria-hidden="true" className="absolute -top-40 -z-10 transform-gpu blur-3xl sm:-top-80">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-cruz-yellow to-cruz-blue opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center rounded-full bg-cruz-yellow/90 px-4 py-1.5 text-sm font-bold text-gray-900">
              Licensed &amp; Insured — Serving Storm Lake, Cherokee, Aurelia, Larrabee &amp; All Buena Vista &amp; Cherokee Counties
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Professional Electrician — Expert Electrical Solutions for Your Home, Business & Farm
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Cruz Electric is your trusted local electrician providing reliable electrical repair, electrical service, and new electrical installations throughout Storm Lake, Cherokee, Aurelia, Larrabee, and all of Buena Vista and Cherokee Counties. As a licensed electrical contractor, we specialize in residential electrician services, commercial electrical work, agricultural electrical systems, and Generac generator installations. From emergency electrical repairs to complete electrical installations, we cruise right through it!
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={quoteMailto}
                className="rounded-md bg-cruz-red px-6 py-3 text-center text-sm font-semibold text-white shadow-lg hover:bg-red-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cruz-red"
              >
                Request A Quote
              </a>
              <a
                href={SITE.phoneHref}
                className="rounded-md bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 transition-colors"
              >
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-cruz-blue">Professional Electrician Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Electrical Services from Licensed Electricians
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              As your local electrician, Cruz Electric delivers quality electrical workmanship for every project. Our certified electricians are experts in all types of electrical work.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-8 sm:mt-16 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 transition-shadow hover:shadow-xl"
              >
                {/* Service header bar */}
                <div className={`${service.color} flex items-center gap-x-3 px-5 py-3`}>
                  <service.icon className="h-6 w-6 text-white" />
                  <h3 className="text-lg font-bold uppercase text-white tracking-wide">
                    {service.title}
                  </h3>
                </div>

                {/* Service image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Description */}
                <div className="flex flex-1 flex-col p-5">
                  <p className="flex-1 text-sm leading-6 text-gray-600">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 transition-colors"
                  >
                    View Gallery
                    <span aria-hidden="true" className="ml-2">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Electrician Services Keywords Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your Trusted Local Electrician
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              When you search for "electrician near me" or need electrical services, Cruz Electric is your local answer. Our licensed electricians provide professional electrical solutions for every need.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col rounded-2xl bg-gray-50 p-8">
              <h3 className="text-lg font-semibold text-gray-900">Residential Electrician</h3>
              <p className="mt-4 text-sm text-gray-600">
                Home electrical repairs, outlet installation, lighting upgrades, panel replacements, circuit breaker repairs, whole house rewiring, GFCI installation, ceiling fan installation, and all residential electrical needs.
              </p>
            </div>
            <div className="flex flex-col rounded-2xl bg-gray-50 p-8">
              <h3 className="text-lg font-semibold text-gray-900">Commercial Electrician</h3>
              <p className="mt-4 text-sm text-gray-600">
                Commercial electrical installations, parking lot lighting, storefront electrical, office wiring, electrical code compliance, three-phase power, commercial panel upgrades, and business electrical systems.
              </p>
            </div>
            <div className="flex flex-col rounded-2xl bg-gray-50 p-8">
              <h3 className="text-lg font-semibold text-gray-900">Emergency Electrician</h3>
              <p className="mt-4 text-sm text-gray-600">
                24/7 emergency electrical repair, power outage troubleshooting, electrical fire prevention, circuit breaker tripping issues, no power problems, electrical safety inspections, and urgent electrical repairs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="relative overflow-hidden bg-gray-900 py-16 sm:py-24">
        <div className="absolute inset-0">
          <Image
            src="/header.jpg"
            alt="Cruz Electric team"
            fill
            sizes="100vw"
            className="object-cover brightness-[0.15] saturate-50"
          />
        </div>
        <div aria-hidden="true" className="absolute -left-80 -top-56 transform-gpu blur-3xl">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-cruz-yellow to-cruz-blue opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-cruz-yellow">About Your Local Electrician</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Licensed Electrician & Electrical Contractor — We Cruise Right Through It!
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Cruz Electric opened in 2020 in Cherokee, Iowa. As a licensed electrician and professional electrical contractor, we have expanded to serve Storm Lake, Aurelia, Larrabee, and all surrounding communities throughout Buena Vista County and Cherokee County. Whether you need an emergency electrician, residential electrician, commercial electrician, or agricultural electrical services, we are dedicated to serving our community with excellent, reliable electrical services.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-3 lg:mx-0 lg:max-w-none">
            <div className="flex flex-col items-center rounded-2xl bg-white/5 p-8 ring-1 ring-inset ring-white/10 backdrop-blur-sm">
              <p className="text-4xl font-bold text-cruz-yellow">5+</p>
              <p className="mt-2 text-sm text-gray-300">Years of Experience</p>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-white/5 p-8 ring-1 ring-inset ring-white/10 backdrop-blur-sm">
              <p className="text-4xl font-bold text-cruz-yellow">100%</p>
              <p className="mt-2 text-sm text-gray-300">Licensed &amp; Insured</p>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-white/5 p-8 ring-1 ring-inset ring-white/10 backdrop-blur-sm">
              <p className="text-4xl font-bold text-cruz-yellow">5★</p>
              <p className="mt-2 text-sm text-gray-300">Customer Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials / Reviews Section */}
      <div id="reviews" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-cruz-blue">Client Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Electricians
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-6 sm:mt-16 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((review) => (
              <div
                key={review.name}
                className="flex flex-col rounded-2xl bg-gray-50 p-6 shadow-sm ring-1 ring-gray-200"
              >
                {/* Stars */}
                <div className="flex gap-x-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-cruz-yellow" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1">
                  <p className="text-sm leading-6 text-gray-600">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </blockquote>
                <div className="mt-4 border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-900">— {review.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Areas Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-cruz-blue">Service Areas</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Proudly Serving Northwest Iowa
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cruz Electric provides expert electrical services throughout Buena Vista County, Cherokee County, and surrounding areas in Iowa.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-4xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Primary Service Areas</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-cruz-blue">•</span>
                    <div>
                      <Link href="/locations/storm-lake" className="font-semibold hover:text-cruz-blue transition-colors">Storm Lake, IA</Link>
                      <span className="text-sm block text-gray-500">Buena Vista County</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-cruz-blue">•</span>
                    <div>
                      <Link href="/locations/cherokee" className="font-semibold hover:text-cruz-blue transition-colors">Cherokee, IA</Link>
                      <span className="text-sm block text-gray-500">Cherokee County</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-cruz-blue">•</span>
                    <div>
                      <Link href="/locations/aurelia" className="font-semibold hover:text-cruz-blue transition-colors">Aurelia, IA</Link>
                      <span className="text-sm block text-gray-500">Cherokee County</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-cruz-blue">•</span>
                    <div>
                      <Link href="/locations/larrabee" className="font-semibold hover:text-cruz-blue transition-colors">Larrabee, IA</Link>
                      <span className="text-sm block text-gray-500">Cherokee County</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Counties Served</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-cruz-blue">•</span>
                    <Link href="/locations/buena-vista-county" className="font-semibold hover:text-cruz-blue transition-colors">Buena Vista County</Link>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-cruz-blue">•</span>
                    <Link href="/locations/cherokee-county" className="font-semibold hover:text-cruz-blue transition-colors">Cherokee County</Link>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    We also serve surrounding communities including Alta, Newell, Marcus, Quimby, Washta, and more throughout northwest Iowa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-base font-semibold leading-7 text-cruz-blue">FAQ</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </p>
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </div>

      {/* Apprenticeship CTA Banner */}
      <div className="bg-cruz-red">
        <div className="mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:flex lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Ask About Our Apprenticeship Program!
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/80">
              We&apos;re committed to training the next generation of skilled electricians.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-cruz-red shadow-sm hover:bg-gray-100 transition-colors"
            >
              Call Us Today
            </a>
            <a
              href={`mailto:${SITE.email}?subject=Apprenticeship Program Inquiry`}
              className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 transition-colors"
            >
              Learn More <span aria-hidden="true" className="ml-1">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
