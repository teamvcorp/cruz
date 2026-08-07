import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, CheckCircleIcon, BoltIcon, ShieldCheckIcon, ClockIcon, StarIcon } from '@heroicons/react/24/solid'
import { SITE, pageMetadata } from '@/app/lib/site'

export const metadata = pageMetadata({
  title: 'Professional Electrician | Electrical Contractor | Cruz Electric',
  description: 'Experienced electrician providing expert electrical services. Licensed electrician for residential, commercial & agricultural electrical repair, installation & service. Call (712) 299-7004.',
  keywords: 'electrician, professional electrician, licensed electrician, electrical contractor, residential electrician, commercial electrician, emergency electrician, electrician near me, certified electrician, local electrician, electrical services, electrical repair, electrical installation',
  // Self-referencing canonical: tells Google THIS url is the original.
  path: '/electrician',
})

const services = [
  'Residential Electrical Services',
  'Commercial Electrical Services',
  'Agricultural Electrical Systems',
  'Emergency Electrical Repair',
  'Electrical Panel Upgrades',
  'Circuit Breaker Repair & Replacement',
  'Outlet & Switch Installation',
  'Lighting Installation & Repair',
  'Ceiling Fan Installation',
  'GFCI Outlet Installation',
  'Electrical Troubleshooting',
  'Electrical Safety Inspections',
  'Generac Generator Installation',
  'Security Camera Installation',
  'Whole House Rewiring',
  'Electrical Code Compliance',
  'Three-Phase Power Installation',
  'Parking Lot Lighting',
]

const features = [
  {
    title: 'Licensed & Insured Electrician',
    description: 'All our electricians are fully licensed and insured, meeting all Iowa electrical codes and safety standards.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Fast Response Times',
    description: 'Need an electrician fast? We provide prompt electrical service with same-day and emergency electrician services available.',
    icon: ClockIcon,
  },
  {
    title: '5-Star Rated Electrician',
    description: 'Our professional electricians are highly rated by customers. We deliver quality electrical workmanship on every job.',
    icon: StarIcon,
  },
  {
    title: 'Comprehensive Electrical Services',
    description: 'From simple electrical repairs to complete electrical installations, our electricians handle all types of electrical work.',
    icon: BoltIcon,
  },
]

export default function ElectricianPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-cruz-blue/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-cruz-yellow px-4 py-1.5 text-sm font-bold text-gray-900">
              Licensed & Insured Professional Electrician
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Experienced Electrician — Expert Electrical Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cruz Electric is your trusted professional electrician providing comprehensive electrical services for homes, businesses, and farms. Our licensed electricians deliver expert electrical repair, installation, and service with a commitment to quality, safety, and customer satisfaction.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4">
              <a
                href={SITE.phoneHref}
                className="rounded-md bg-cruz-red px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500"
              >
                <PhoneIcon className="inline-block h-5 w-5 mr-2" />
                Call Electrician: (712) 299-7004
              </a>
              <a
                href="mailto:cruzelectric712@gmail.com?subject=Electrician Service Request"
                className="rounded-md bg-cruz-blue px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600"
              >
                <EnvelopeIcon className="inline-block h-5 w-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Our Electricians */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-cruz-blue">Why Choose Our Electricians</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Professional Electrician Services You Can Trust
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              When you need an electrician, choosing the right electrical contractor matters. Our licensed electricians bring experience, professionalism, and dedication to every electrical project.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-8 w-8 flex-none text-cruz-blue" aria-hidden="true" />
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Electrician Services */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-cruz-blue">Electrical Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Complete Electrician Services
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our electricians provide a full range of electrical services. From routine electrical repairs to complex electrical installations, we handle all your electrical needs.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-4 lg:max-w-none lg:grid-cols-3">
              {services.map((service) => (
                <div key={service} className="flex gap-x-3">
                  <CheckCircleIcon className="h-6 w-6 flex-none text-cruz-blue" aria-hidden="true" />
                  <dd className="text-base leading-7 text-gray-600">{service}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Types of Electricians */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Specialized Electrician Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our team includes specialized electricians for every type of electrical work. Whether you need a residential electrician, commercial electrician, or emergency electrician, we have the expertise.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Residential Electrician</h3>
              <p className="mt-4 text-base text-gray-600">
                Our residential electricians specialize in home electrical services. From electrical repairs to complete home rewiring, our electricians ensure your home's electrical system is safe and reliable. We handle outlet installation, lighting upgrades, panel replacements, and all residential electrical needs.
              </p>
              <Link
                href="/gallary/residential"
                className="mt-6 text-sm font-semibold text-cruz-blue hover:text-blue-700"
              >
                View Residential Work <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="flex flex-col rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Commercial Electrician</h3>
              <p className="mt-4 text-base text-gray-600">
                Our commercial electricians understand business electrical needs. We provide commercial electrical installation, repair, and maintenance services for offices, retail stores, warehouses, and all commercial properties. Our electricians minimize downtime and keep your business running.
              </p>
              <Link
                href="/gallary/commercial"
                className="mt-6 text-sm font-semibold text-cruz-blue hover:text-blue-700"
              >
                View Commercial Work <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="flex flex-col rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Emergency Electrician</h3>
              <p className="mt-4 text-base text-gray-600">
                When you need an emergency electrician, we respond fast. Our electricians provide 24/7 emergency electrical services for urgent electrical issues. Power outages, electrical fires, circuit problems — our emergency electrician service is here when you need it most.
              </p>
              <a
                href={SITE.phoneHref}
                className="mt-6 text-sm font-semibold text-cruz-red hover:text-red-700"
              >
                Call Emergency Electrician <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Local Electrician Serving Iowa
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              As your local electrician, we serve communities throughout Storm Lake, Cherokee, and all surrounding areas in Buena Vista County and Cherokee County, Iowa.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/locations/storm-lake" className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50">
                Electrician Storm Lake
              </Link>
              <Link href="/locations/cherokee" className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50">
                Electrician Cherokee
              </Link>
              <Link href="/locations/aurelia" className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50">
                Electrician Aurelia
              </Link>
              <Link href="/locations/larrabee" className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50">
                Electrician Larrabee
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-cruz-blue">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need an Electrician?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Call Cruz Electric today for professional electrician services. Our licensed electricians are ready to help with all your electrical needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href={SITE.phoneHref}
                className="rounded-md bg-cruz-red px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-red-500"
              >
                Call Electrician: (712) 299-7004
              </a>
              <Link
                href="/"
                className="text-lg font-semibold leading-6 text-white hover:text-cruz-yellow"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
