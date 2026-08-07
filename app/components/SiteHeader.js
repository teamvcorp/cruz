'use client'

/**
 * The ONLY client component in the site chrome.
 *
 * It is split out from the root layout on purpose. Previously the entire root
 * layout was marked 'use client', which forced every page into the client
 * bundle AND broke Next.js metadata resolution (the hand-written <head> in a
 * client layout produced duplicate <title>/<meta description> tags and a
 * hardcoded canonical on every page). Isolating the interactive bit here lets
 * the layout, the footer, and every page render on the server.
 */

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/20/solid'
import { SITE, navigation, quoteMailto } from '@/app/lib/site'

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Top contact banner. min-w-0/truncate keep the phone number from
          forcing horizontal page scroll on 320px-wide screens. */}
      <div className="bg-cruz-red">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-3 px-4 py-1.5 sm:justify-between sm:px-6 lg:px-8">
          <p className="min-w-0 truncate text-xs font-bold text-white sm:text-sm">
            <PhoneIcon className="mr-1 inline-block h-4 w-4 shrink-0" />
            Call Us Today{' '}
            <a href={SITE.phoneHref} className="underline">
              {SITE.phoneDisplay}
            </a>
          </p>
          <a
            href={quoteMailto}
            className="hidden shrink-0 items-center gap-x-1 text-xs font-semibold text-white sm:flex sm:text-sm"
          >
            <EnvelopeIcon className="h-4 w-4" />
            Request A Quote
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{SITE.name}</span>
              <Image
                src="/headerplain.png"
                alt="Cruz Electric Logo"
                width={800}
                height={176}
                sizes="(max-width: 640px) 160px, 220px"
                className="h-10 w-auto sm:h-12"
                priority
              />
            </Link>
          </div>

          {/* Mobile: tap-to-call sits next to the menu button so the primary
              conversion action is always one tap away, never buried in a menu.
              Both targets are >=44px to meet touch-target guidance. */}
          <div className="flex items-center gap-x-1 lg:hidden">
            <a
              href={SITE.phoneHref}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-cruz-blue"
            >
              <span className="sr-only">Call {SITE.phoneDisplay}</span>
              <PhoneIcon aria-hidden="true" className="h-6 w-6" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 transition-colors hover:text-cruz-blue"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href={quoteMailto}
              className="rounded-md bg-cruz-red px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cruz-red"
            >
              Get A Quote <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-gray-900/40" aria-hidden="true" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">{SITE.name}</span>
                <Image
                  src="/headerplain.png"
                  alt="Cruz Electric Logo"
                  width={800}
                  height={176}
                  sizes="160px"
                  className="h-10 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md text-gray-700"
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
                  <Link
                    href="/electrician"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Electrician Services
                  </Link>
                  <Link
                    href="/gallary"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Gallery
                  </Link>
                </div>
                <div className="py-6">
                  <a
                    href={SITE.phoneHref}
                    className="-mx-3 flex items-center gap-x-2 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-cruz-blue hover:bg-gray-50"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    {SITE.phoneDisplay}
                  </a>
                  <a
                    href={quoteMailto}
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
    </>
  )
}
