import Image from 'next/image'
import Link from 'next/link'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/20/solid'
import { SITE, footerNavigation, serviceAreas } from '@/app/lib/site'

/**
 * Server component -- no interactivity, so none of this ships as JS.
 *
 * The service-area links are not decoration: internal links from every page to
 * the /locations/* pages are how those pages accumulate crawl priority. Without
 * them the location pages are near-orphans reachable only from the homepage.
 */
export default function SiteFooter() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <Image
              src="/headerplain.png"
              alt="Cruz Electric"
              width={800}
              height={176}
              sizes="180px"
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-sm leading-6 text-gray-300">
              Licensed &amp; Insured electrician and electrical contractor serving Larrabee, Storm
              Lake, Cherokee, Aurelia and all surrounding areas in Iowa since {SITE.foundingDate}.
              Professional electrician services for residential, commercial, and agricultural
              electrical needs.
            </p>
            <div className="flex gap-x-2">
              <a
                href={SITE.phoneHref}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md text-gray-400 transition-colors hover:text-white"
              >
                <span className="sr-only">Call {SITE.phoneDisplay}</span>
                <PhoneIcon className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md text-gray-400 transition-colors hover:text-white"
              >
                <span className="sr-only">Email {SITE.email}</span>
                <EnvelopeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* grid-cols-1 below sm: two columns of links at 320px wrap badly. */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:col-span-2 xl:mt-0 xl:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
              <ul role="list" className="mt-6 space-y-4">
                {footerNavigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 transition-colors hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 transition-colors hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:col-span-2 xl:col-span-1">
              <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
              <ul role="list" className="mt-6 space-y-4">
                {footerNavigation.contact.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="break-words text-sm leading-6 text-gray-300 transition-colors hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Service-area link block: internal linking for the location pages. */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <h3 className="text-sm font-semibold leading-6 text-white">Areas We Serve</h3>
          <ul role="list" className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {serviceAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/locations/${area.slug}`}
                  className="text-sm leading-6 text-gray-400 transition-colors hover:text-white"
                >
                  Electrician in {area.name}, IA
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved. Licensed &amp;
            Insured.
          </p>
        </div>
      </div>
    </footer>
  )
}
