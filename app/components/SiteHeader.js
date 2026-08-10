'use client'

/**
 * The only client component in the site chrome.
 *
 * Split out from the root layout deliberately: making the layout itself
 * 'use client' breaks Next.js metadata resolution and emits duplicate
 * <title>/<meta> tags plus a wrong canonical on every page. See
 * OPTIMIZATION-NOTES.md.
 *
 * The nav bar is bg-cruz-blue (#005CB9), sampled from the logo's own swoosh.
 * The swoosh bleeds to the top-left edge of headerplain.png, so on a white bar
 * it read as a hard blue blob; on an exact colour match it has no visible
 * boundary at all. The pink strip above is separated from the blue by a black
 * rule -- which is precisely how the logo itself stops those two saturated
 * colours from vibrating against each other.
 */

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/20/solid'
import { SITE, navigation, quoteMailto } from '@/app/lib/site'
import Button from '@/app/components/ui/Button'

const NAV_LINK =
  'font-display text-base font-bold uppercase tracking-wider text-white/90 transition-colors hover:text-cruz-yellow'

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Contact strip. min-w-0 + truncate stop the phone number forcing
          horizontal page scroll at 320px. */}
      <div className="border-b-[3px] border-cruz-ink bg-cruz-red">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-3 px-5 py-1.5 sm:justify-between sm:px-6 lg:px-8">
          <p className="min-w-0 truncate text-xs font-bold text-white sm:text-sm">
            <PhoneIcon className="mr-1 inline-block h-4 w-4 shrink-0" aria-hidden="true" />
            Call today{' '}
            <a href={SITE.phoneHref} className="underline underline-offset-2">
              {SITE.phoneDisplay}
            </a>
          </p>
          <a
            href={quoteMailto}
            className="hidden shrink-0 items-center gap-x-1.5 text-xs font-semibold text-white hover:underline sm:flex sm:text-sm"
          >
            <EnvelopeIcon className="h-4 w-4" aria-hidden="true" />
            Request a quote
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b-[3px] border-cruz-ink bg-cruz-blue">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2.5 sm:px-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 block p-1.5">
              <span className="sr-only">{SITE.name} — home</span>
              <Image
                src="/headerplain.png"
                alt="Cruz Electric"
                width={800}
                height={176}
                sizes="(max-width: 640px) 170px, 230px"
                className="h-10 w-auto sm:h-12"
                priority
              />
            </Link>
          </div>

          {/* Tap-to-call sits beside the menu button so the primary conversion
              action is never buried inside a menu. Both are 44px targets. */}
          <div className="flex items-center gap-x-1 lg:hidden">
            <a
              href={SITE.phoneHref}
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-white/15 text-white"
            >
              <span className="sr-only">Call {SITE.phoneDisplay}</span>
              <PhoneIcon aria-hidden="true" className="h-6 w-6" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-white/15 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-7">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className={NAV_LINK}>
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button href={quoteMailto} variant="bolt" size="sm">
              Get a quote
            </Button>
          </div>
        </nav>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-cruz-ink/50" aria-hidden="true" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-5 py-4 sm:max-w-sm">
            <div className="flex items-center justify-between border-b-[3px] border-cruz-ink bg-cruz-blue -mx-5 -mt-4 px-5 py-2.5">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">{SITE.name} — home</span>
                <Image
                  src="/headerplain.png"
                  alt="Cruz Electric"
                  width={800}
                  height={176}
                  sizes="170px"
                  className="h-10 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-white/15 text-white"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="divide-y divide-gray-200">
                <div className="flex flex-col gap-1 pb-6">
                  {[
                    ...navigation,
                    { name: 'Electrician Services', href: '/electrician' },
                    { name: 'Gallery', href: '/gallary' },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 rounded-sm px-3 py-3 font-display text-xl font-bold uppercase tracking-wide text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-3 pt-6">
                  <Button href={SITE.phoneHref} variant="secondary" size="lg" className="w-full">
                    <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                    {SITE.phoneDisplay}
                  </Button>
                  <Button href={quoteMailto} variant="primary" size="lg" className="w-full">
                    Request a quote
                  </Button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  )
}
