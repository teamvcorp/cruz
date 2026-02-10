import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

export const metadata = {
  title: 'Electrician Storm Lake IA | 24/7 Electrical Repair & Service | Cruz Electric',
  description: 'Licensed electrician in Storm Lake IA. Fast electrical repair, service & new installations. Residential, commercial & generator experts. Call (712) 299-7004 for same-day service.',
  keywords: 'electrician Storm Lake IA, electrical repair Storm Lake, emergency electrician Storm Lake, generator installation Storm Lake, residential electrician Storm Lake, commercial electrician Storm Lake, licensed electrician Storm Lake Iowa',
  openGraph: {
    title: 'Electrician Storm Lake IA | 24/7 Electrical Repair & Service',
    description: 'Licensed electrician in Storm Lake IA. Fast electrical repair, service & new installations. Call (712) 299-7004',
  }
}

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

export default function StormLakePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-cruz-blue/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="mb-4 flex items-center gap-x-2">
              <MapPinIcon className="h-6 w-6 text-cruz-red" />
              <span className="text-sm font-semibold text-cruz-blue">Storm Lake, Iowa</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Licensed Electrician in Storm Lake, IA
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cruz Electric is your trusted local electrician serving Storm Lake and the surrounding Buena Vista County area. We provide fast, reliable electrical repair, service, and new installations for homes, businesses, and farms.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <a
                href="tel:7122997004"
                className="rounded-md bg-cruz-red px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
              >
                <PhoneIcon className="inline-block h-5 w-5 mr-2" />
                Call (712) 299-7004
              </a>
              <a
                href="mailto:cruzelectric712@gmail.com?subject=Storm Lake Electrical Service Request"
                className="rounded-md bg-cruz-blue px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600"
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
              Professional Electrical Services in Storm Lake
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From routine repairs to complete electrical installations, Cruz Electric handles all your electrical needs in Storm Lake with professionalism and expertise.
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
              Why Storm Lake Chooses Cruz Electric
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              As your local Storm Lake electrician, we're committed to providing exceptional service with fast response times and competitive pricing.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  Licensed & Insured
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Fully licensed and insured to work throughout Storm Lake and Buena Vista County. We meet all Iowa electrical codes and safety standards.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  Local & Reliable
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Based right here in Storm Lake, we provide fast response times and personalized service. We're your neighbors, not a national chain.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  Expert Technicians
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Our electricians have years of experience and ongoing training. From simple repairs to complex installations, we do it right.</p>
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
              Serving Storm Lake & Surrounding Areas
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cruz Electric proudly serves Storm Lake and all surrounding communities in Buena Vista County, including Alta, Newell, Truesdale, and Lakeside.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-cruz-blue">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need an Electrician in Storm Lake?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Call Cruz Electric today for fast, professional electrical service in Storm Lake. Licensed, insured, and ready to help.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="tel:7122997004"
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
