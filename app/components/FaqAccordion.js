'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'

/**
 * Extracted from app/page.js so the homepage itself can be a server component.
 * Only this accordion needs client-side JS; everything else on the page is
 * static markup and now renders on the server.
 *
 * The answers are rendered into the DOM even while collapsed (Headless UI's
 * DisclosurePanel unmounts by default, so `static` + a CSS-driven hide would be
 * needed for crawlability). We keep the default mount behaviour but ALSO emit
 * the same Q&A pairs as FAQPage JSON-LD on the page, which is what search
 * engines actually parse.
 */
export default function FaqAccordion({ faqs }) {
  return (
    <dl className="mt-10 divide-y divide-gray-900/10">
      {faqs.map((faq) => (
        <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
          <dt>
            <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
              <span className="pr-4 text-base font-semibold leading-7">{faq.question}</span>
              <span className="ml-2 flex h-7 shrink-0 items-center">
                <PlusIcon aria-hidden="true" className="h-6 w-6 group-data-[open]:hidden" />
                <MinusIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </span>
            </DisclosureButton>
          </dt>
          {/* pr-12 was clipping answer text on narrow screens; scale it by breakpoint. */}
          <DisclosurePanel as="dd" className="mt-2 pr-2 sm:pr-12">
            <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
          </DisclosurePanel>
        </Disclosure>
      ))}
    </dl>
  )
}
