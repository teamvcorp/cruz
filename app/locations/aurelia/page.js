import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

export const metadata = {
  title: 'Electrician Aurelia IA | Local Electrical Repair & Service | Cruz Electric',
  description: 'Licensed electrician serving Aurelia IA. Residential, commercial & agricultural electrical repair and installation. Fast, reliable service. Call (712) 299-7004.',
  keywords: 'electrician Aurelia IA, electrical repair Aurelia, emergency electrician Aurelia Iowa, generator installation Aurelia, residential electrician Aurelia, commercial electrician Cherokee County',
  openGraph: {
    title: 'Electrician Aurelia IA | Local Electrical Repair & Service',
    description: 'Licensed electrician serving Aurelia IA. Fast, reliable electrical service. Call (712) 299-7004',
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

export default function AureliaPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-cruz-blue/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="mb-4 flex items-center gap-x-2">
              <MapPinIcon className="h-6 w-6 text-cruz-red" />
              <span className="text-sm font-semibold text-cruz-blue">Aurelia, Iowa</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Licensed Electrician in Aurelia, IA
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cruz Electric provides professional electrical services to Aurelia and the surrounding Cherokee County area. From residential repairs to agricultural installations, we're your local electrical experts.
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
                href="mailto:cruzelectric712@gmail.com?subject=Aurelia Electrical Service Request"
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
              Professional Electrical Services in Aurelia
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you need electrical repairs for your home, business, or farm in Aurelia, Cruz Electric delivers quality workmanship and reliable service every time.
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
              Your Local Aurelia Electrician
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cruz Electric is proud to serve Aurelia with fast, professional electrical services for all your residential, commercial, and agricultural needs.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  Licensed & Insured
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Fully licensed and insured to work throughout Aurelia and Cherokee County. We comply with all Iowa electrical codes and safety regulations.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  Local Service
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">We serve the Aurelia community with pride, offering personalized service and quick response times you can count on.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  Fair Pricing
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Competitive, transparent pricing with no hidden fees. Free estimates on new installations and major repairs.</p>
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
              Serving Aurelia & Surrounding Cherokee County Communities
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              In addition to Aurelia, Cruz Electric serves Cherokee, Larrabee, Storm Lake, and all surrounding communities in Cherokee and Buena Vista Counties.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-cruz-blue">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need an Electrician in Aurelia?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Call Cruz Electric today for fast, professional electrical service in Aurelia. Licensed, insured, and ready to help.
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
