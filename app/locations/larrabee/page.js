import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

export const metadata = {
  title: 'Electrician Larrabee IA | Local Electrical Contractor | Cruz Electric',
  description: 'Trusted electrician in Larrabee IA. Expert electrical repair, installation & service for homes and businesses. Licensed & insured. Call (712) 299-7004.',
  keywords: 'electrician Larrabee IA, electrical repair Larrabee, emergency electrician Larrabee Iowa, generator installation Larrabee, residential electrician Cherokee County',
  openGraph: {
    title: 'Electrician Larrabee IA | Local Electrical Contractor',
    description: 'Trusted electrician in Larrabee IA. Expert electrical repair, installation & service. Call (712) 299-7004',
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

export default function LarrabeePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-cruz-blue/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="mb-4 flex items-center gap-x-2">
              <MapPinIcon className="h-6 w-6 text-cruz-red" />
              <span className="text-sm font-semibold text-cruz-blue">Larrabee, Iowa</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Licensed Electrician in Larrabee, IA
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cruz Electric is your trusted electrical contractor serving Larrabee and the surrounding Cherokee County area. We provide reliable electrical repair, service, and installations for residential and commercial properties.
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
                href="mailto:cruzelectric712@gmail.com?subject=Larrabee Electrical Service Request"
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
              Professional Electrical Services in Larrabee
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From emergency repairs to complete electrical installations, Cruz Electric is Larrabee's go-to electrical contractor for quality work and exceptional service.
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
              Your Local Larrabee Electrician
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cruz Electric provides fast, reliable electrical services to the Larrabee community with professionalism and expertise you can trust.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  Quick Response
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">When you need an electrician in Larrabee, we respond quickly. Our local presence means fast service when you need it most.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  Expert Service
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Our licensed electricians have the training and experience to handle any electrical job, big or small, throughout Larrabee.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  Community Focused
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">We're committed to serving the Larrabee community with integrity, fair pricing, and workmanship we stand behind.</p>
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
              Serving Larrabee & All Surrounding Areas
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cruz Electric serves Larrabee and all neighboring communities including Cherokee, Aurelia, Storm Lake, and throughout Cherokee and Buena Vista Counties.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-cruz-blue">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need an Electrician in Larrabee?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Call Cruz Electric today for professional electrical service in Larrabee. Licensed, insured, and ready to help.
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
