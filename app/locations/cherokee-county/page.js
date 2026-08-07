import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import { SITE, pageMetadata } from '@/app/lib/site'

export const metadata = pageMetadata({
  title: 'Electrician Cherokee County IA | Licensed Electrical Contractor | Cruz Electric',
  description: 'Expert electrician serving all of Cherokee County IA including Cherokee, Aurelia, Larrabee, Marcus. Electrical repair, installation & service. Call (712) 299-7004.',
  keywords: 'electrician Cherokee County IA, electrical contractor Cherokee County, electrician Cherokee IA, electrician Aurelia, electrician Marcus IA, licensed electrician Iowa',
  // Self-referencing canonical: tells Google THIS url is the original.
  path: '/locations/cherokee-county',
})

const services = [
  'Residential Electrical Repair',
  'Commercial Electrical Service',
  'New Electrical Installations',
  'Generac Generator Installation',
  'Electrical Panel Upgrades',
  'Outlet & Switch Installation',
  'Lighting Installation & Repair',
  'Emergency Electrical Services',
  'Security Camera Installation',
  'Agricultural Electrical Systems',
  'Electrical Troubleshooting',
  'Code Compliance & Inspections',
]

const communities = [
  'Cherokee',
  'Aurelia',
  'Larrabee',
  'Marcus',
  'Quimby',
  'Washta',
  'Cleghorn',
  'Meriden',
]

export default function CherokeeCountyPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-cruz-blue/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="mb-4 flex items-center gap-x-2">
              <MapPinIcon className="h-6 w-6 text-cruz-red" />
              <span className="text-sm font-semibold text-cruz-blue">Cherokee County, Iowa</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Licensed Electrician Serving Cherokee County, IA
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Since 2020, Cruz Electric has been Cherokee County's trusted electrical contractor. From Cherokee to Aurelia to Larrabee and beyond, we provide expert electrical repair, service, and installations throughout the county.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-x-4">
              <a
                href={SITE.phoneHref}
                className="rounded-md bg-cruz-red px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500"
              >
                <PhoneIcon className="inline-block h-5 w-5 mr-2" />
                Call (712) 299-7004
              </a>
              <a
                href="mailto:cruzelectric712@gmail.com?subject=Cherokee County Electrical Service Request"
                className="rounded-md bg-cruz-blue px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600"
              >
                <EnvelopeIcon className="inline-block h-5 w-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-cruz-blue">Complete Electrical Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Professional Electrical Services Throughout Cherokee County
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cruz Electric opened in Cherokee in 2020 and has expanded to serve the entire Cherokee County area with comprehensive electrical services for all property types.
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

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cherokee County's Local Electrician
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Founded in Cherokee in 2020, Cruz Electric is deeply rooted in the Cherokee County community and committed to providing exceptional electrical services.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  Founded in Cherokee
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Cruz Electric was founded right here in Cherokee in 2020. We're local residents serving our community with pride.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  County-Wide Coverage
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">We serve all communities throughout Cherokee County with fast response times and reliable service.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  Complete Services
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">From homes to farms to businesses, we handle all types of electrical work throughout Cherokee County.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Communities Served Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Communities We Serve in Cherokee County
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cruz Electric proudly serves these and all other communities throughout Cherokee County:
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl">
            <ul className="grid grid-cols-2 gap-4 text-center sm:grid-cols-3 lg:grid-cols-4">
              {communities.map((community) => (
                <li key={community} className="rounded-lg bg-gray-50 px-4 py-3 text-sm font-medium text-gray-900">
                  {community}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-cruz-blue">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need an Electrician in Cherokee County?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Call Cruz Electric today for fast, professional electrical service anywhere in Cherokee County. Licensed, insured, and ready to help.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href={SITE.phoneHref}
                className="rounded-md bg-cruz-red px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-red-500"
              >
                Call (712) 299-7004
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
