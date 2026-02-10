'use client'

import "./globals.css";
import Image from "next/image";
import { useState } from 'react'
import Link from 'next/link'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Residential', href: '/gallary/residential' },
  { name: 'Commercial', href: '/gallary/commercial' },
  { name: 'Agricultural', href: '/gallary/agricultural' },
  { name: 'Communications', href: '/gallary/communications' },
  { name: 'Generators', href: '/gallary/generator' },
]

const footerNavigation = {
  services: [
    { name: 'Residential', href: '/gallary/residential' },
    { name: 'Commercial', href: '/gallary/commercial' },
    { name: 'Agricultural', href: '/gallary/agricultural' },
    { name: 'Communications', href: '/gallary/communications' },
    { name: 'Generator Install', href: '/gallary/generator' },
  ],
  company: [
    { name: 'About Us', href: '/#about' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'Gallery', href: '/gallary' },
  ],
  contact: [
    { name: '(712) 299-7004', href: 'tel:7122997004' },
    { name: 'cruzelectric712@gmail.com', href: 'mailto:cruzelectric712@gmail.com' },
    { name: 'Storm Lake & Cherokee, IA', href: '#' },
  ],
}

export default function RootLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <html lang="en">
      <head>
        <title>Electrician in Storm Lake, Cherokee, Aurelia & Larrabee IA | Licensed Electrical Contractor | Cruz Electric</title>
        <meta name="description" content="Professional electrician providing electrical repair, installation & service in Storm Lake, Cherokee, Aurelia, Larrabee & all Buena Vista/Cherokee Counties IA. Licensed electrician for residential, commercial & agricultural. Call (712) 299-7004." />
        <meta name="keywords" content="electrician, electrician near me, local electrician, electrician Storm Lake IA, electrician Cherokee IA, electrician Aurelia IA, electrician Larrabee IA, electrician Buena Vista County, electrician Cherokee County, electrical contractor, electrical repair, electrical service, residential electrician, commercial electrician, agricultural electrician, emergency electrician, licensed electrician, certified electrician Iowa, professional electrician, generator installation, Generac generator, electric contractor Iowa, Isaac Cruz electrician" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="US-IA" />
        <meta name="geo.placename" content="Storm Lake, Aurelia, Cherokee, Larrabee" />
        <meta name="geo.position" content="42.6411;-95.2094" />
        <meta name="ICBM" content="42.6411, -95.2094" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Professional Electrician | Storm Lake, Cherokee, Aurelia & Larrabee IA | Cruz Electric" />
        <meta property="og:description" content="Trusted electrician providing electrical repair, installation & service in Storm Lake, Cherokee, Aurelia, Larrabee & surrounding Iowa areas. Licensed & insured electrical contractor." />
        <meta property="og:url" content="https://cruzelectric.com" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Cruz Electric" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Electrician | Storm Lake, Cherokee, Aurelia & Larrabee IA" />
        <meta name="twitter:description" content="Professional electrician providing electrical services in Storm Lake, Cherokee, Aurelia & Larrabee IA. Licensed & insured. Call (712) 299-7004" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://cruzelectric.com" />
        
        {/* JSON-LD Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Electrician",
              "@id": "https://cruzelectric.com",
              "name": "Cruz Electric - Professional Electrician",
              "image": "https://cruzelectric.com/header.jpg",
              "description": "Professional electrician and licensed electrical contractor providing residential, commercial, and agricultural electrical services including electrical repairs, electrical installations, panel upgrades, and Generac generator installations throughout Iowa.",
              "url": "https://cruzelectric.com",
              "telephone": "+17122997004",
              "email": "cruzelectric712@gmail.com",
              "priceRange": "$$",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Storm Lake",
                "addressRegion": "IA",
                "postalCode": "50588",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "42.6411",
                "longitude": "-95.2094"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Storm Lake",
                  "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "IA",
                    "addressCountry": "US"
                  }
                },
                {
                  "@type": "City",
                  "name": "Cherokee",
                  "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "IA",
                    "addressCountry": "US"
                  }
                },
                {
                  "@type": "City",
                  "name": "Aurelia",
                  "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "IA",
                    "addressCountry": "US"
                  }
                },
                {
                  "@type": "City",
                  "name": "Larrabee",
                  "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "IA",
                    "addressCountry": "US"
                  }
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Buena Vista County",
                  "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "IA",
                    "addressCountry": "US"
                  }
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Cherokee County",
                  "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "IA",
                    "addressCountry": "US"
                  }
                }
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "07:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "5"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Electrical Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Residential Electrical Repair",
                      "description": "Expert residential electrical repair and installation services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Electrical Services",
                      "description": "Professional commercial electrical repair and installation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Agricultural Electrical Services",
                      "description": "Specialized agricultural electrical systems and repairs"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Generator Installation",
                      "description": "Generac generator sales, installation, and maintenance"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Security Camera Installation",
                      "description": "Low-voltage communications and security camera systems"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Electrical Service Upgrades",
                      "description": "Electrical panel upgrades and service installations"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Emergency Electrical Repair",
                      "description": "24/7 emergency electrical repair services"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="bg-white">
        {/* Top banner */}
        <div className="bg-cruz-red">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-3 px-4 py-1.5 sm:justify-between sm:px-6 lg:px-8">
            <p className="text-xs font-bold text-white sm:text-sm">
              <PhoneIcon className="mr-1 inline-block h-4 w-4" />
              Call Us Today <a href="tel:7122997004" className="underline">(712) 299-7004</a>
            </p>
            <a
              href="mailto:cruzelectric712@gmail.com?subject=Please reach out to me for a quote"
              className="hidden items-center gap-x-1 text-xs font-semibold text-white sm:flex sm:text-sm"
            >
              <EnvelopeIcon className="h-4 w-4" />
              Request A Quote
            </a>
          </div>
        </div>

        {/* Header / Navigation */}
        <header className="sticky top-0 z-50 bg-white shadow-sm">
          <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Cruz Electric</span>
                <Image
                  src="/headerplain.png"
                  alt="Cruz Electric Logo"
                  width={180}
                  height={50}
                  className="h-10 w-auto sm:h-12"
                  priority
                />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex lg:gap-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-cruz-blue transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="mailto:cruzelectric712@gmail.com?subject=Please reach out to me for a quote"
                className="rounded-md bg-cruz-red px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cruz-red"
              >
                Get A Quote <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>

          {/* Mobile menu */}
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Cruz Electric</span>
                  <Image
                    src="/headerplain.png"
                    alt="Cruz Electric Logo"
                    width={160}
                    height={45}
                    className="h-10 w-auto"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="tel:7122997004"
                      className="-mx-3 flex items-center gap-x-2 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-cruz-blue hover:bg-gray-50"
                    >
                      <PhoneIcon className="h-5 w-5" />
                      (712) 299-7004
                    </a>
                    <a
                      href="mailto:cruzelectric712@gmail.com?subject=Please reach out to me for a quote"
                      className="mt-2 block rounded-md bg-cruz-red px-4 py-2.5 text-center text-base font-semibold text-white shadow-sm hover:bg-red-500"
                    >
                      Request A Quote
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>

        {/* Main content */}
        {children}

        {/* Footer */}
        <footer className="bg-gray-900" aria-labelledby="footer-heading">
          <h2 id="footer-heading" className="sr-only">Footer</h2>
          <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-4">
                <Image
                  src="/headerplain.png"
                  alt="Cruz Electric"
                  width={180}
                  height={50}
                  className="h-10 w-auto brightness-0 invert"
                />
                <p className="text-sm leading-6 text-gray-300">
                  Licensed & Insured electrician and electrical contractor serving Larrabee, Storm Lake, Cherokee, Aurelia and all surrounding areas in Iowa since 2020. Professional electrician services for residential, commercial, and agricultural electrical needs.
                </p>
                <div className="flex gap-x-4">
                  <a href="tel:7122997004" className="text-gray-400 hover:text-white transition-colors">
                    <PhoneIcon className="h-5 w-5" />
                  </a>
                  <a href="mailto:cruzelectric712@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                    <EnvelopeIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {footerNavigation.services.map((item) => (
                        <li key={item.name}>
                          <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {footerNavigation.company.map((item) => (
                        <li key={item.name}>
                          <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.contact.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-16 border-t border-white/10 pt-8">
              <p className="text-xs leading-5 text-gray-400">
                &copy; {new Date().getFullYear()} Cruz Electric. All rights reserved. Licensed & Insured.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
