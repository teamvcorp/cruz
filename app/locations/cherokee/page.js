import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import { SITE, pageMetadata } from '@/app/lib/site'

export const metadata = pageMetadata({
  title: 'Electrician Cherokee IA | Licensed Electrical Contractor | Cruz Electric',
  description: 'Top-rated electrician in Cherokee IA. Expert electrical repair, installation & service. Residential, commercial & agricultural. Licensed & insured. Call (712) 299-7004.',
  keywords: 'electrician Cherokee IA, electrical repair Cherokee, emergency electrician Cherokee, generator installation Cherokee, residential electrician Cherokee, commercial electrician Cherokee, licensed electrician Cherokee Iowa, Cherokee County electrician',
  // Self-referencing canonical: tells Google THIS url is the original.
  path: '/locations/cherokee',
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

export default function CherokeePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-cruz-blue/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="mb-4 flex items-center gap-x-2">
              <MapPinIcon className="h-6 w-6 text-cruz-red" />
              <span className="text-sm font-semibold text-cruz-blue">Cherokee, Iowa</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Licensed Electrician in Cherokee, IA
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Since 2020, Cruz Electric has been Cherokee's trusted electrical contractor. We provide expert electrical repair, service, and installations for residential, commercial, and agricultural properties throughout Cherokee County.
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
                href="mailto:cruzelectric712@gmail.com?subject=Cherokee Electrical Service Request"
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
              Professional Electrical Services in Cherokee
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cruz Electric opened in Cherokee in 2020 and has quickly become the area's most trusted electrical contractor. We handle everything from emergency repairs to complete electrical installations.
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
              Why Cherokee Trusts Cruz Electric
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Founded right here in Cherokee, we understand the unique electrical needs of our community and are dedicated to providing exceptional service.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  Cherokee Based
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Cruz Electric opened in Cherokee in 2020. We're local residents committed to serving our community with integrity and excellence.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  Fast Response
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Being local means quick response times. When you have an electrical issue in Cherokee, we're just minutes away.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  All Services
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">From homes to farms to businesses, we handle all types of electrical work throughout Cherokee and Cherokee County.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Service Areas Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Serving Cherokee & All of Cherokee County
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cruz Electric serves Cherokee and surrounding communities throughout Cherokee County, including Aurelia, Larrabee, Marcus, Quimby, and Washta.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-cruz-blue">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need an Electrician in Cherokee?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Call Cruz Electric today. We're your local Cherokee electrician, ready to help with any electrical need.
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
