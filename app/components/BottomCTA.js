import { PhoneIcon } from '@heroicons/react/24/solid'
import { SITE, quoteMailto } from '@/app/lib/site'
import Button from '@/app/components/ui/Button'

/**
 * Closing call-to-action. This was the single most duplicated block in the
 * codebase -- repeated verbatim across all six location pages and the
 * electrician page, with only the headline changing.
 */
export default function BottomCTA({
  title = 'Need an electrician?',
  body = 'Free estimates, licensed and insured, and a real person on the phone. Tell us what you need and we will get you scheduled.',
}) {
  return (
    <section className="bg-cruz-blue">
      <div className="hazard-stripe" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <h2 className="text-balance font-display text-4xl font-extrabold uppercase leading-[0.95] text-white sm:text-5xl">
            {title}
          </h2>
          <p className="max-w-xl text-base leading-7 text-blue-100 sm:text-lg">{body}</p>
          <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
            <Button href={SITE.phoneHref} variant="bolt" size="lg">
              <PhoneIcon className="h-5 w-5" aria-hidden="true" />
              {SITE.phoneDisplay}
            </Button>
            <Button href={quoteMailto} variant="light" size="lg">
              Request a quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
