'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useCallback, useEffect, useState } from 'react'
import { SITE, quoteMailto } from '@/app/lib/site'
import Button from '@/app/components/ui/Button'

/**
 * Gallery carousel.
 *
 * Two things here are load-speed decisions rather than styling:
 *  - Only the FIRST slide gets `priority`; the rest are explicitly lazy. Embla
 *    keeps every slide mounted and offset inside an overflow-hidden track, so
 *    without this the browser can be tricked into fetching all of the
 *    full-size photos during initial page load.
 *  - `sizes` is capped at the 896px track width so next/image never serves a
 *    1920px derivative into an 896px box.
 *
 * `imageSrc` mixes two shapes on purpose: static imports for the photos
 * bundled with the site, and plain URL strings for owner uploads out of
 * Vercel Blob. next/image accepts both when `fill` is used.
 */
export default function PictureContainer({ imageSrc = [], title, description }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ])
  const [selected, setSelected] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi])

  return (
    <>
      {/* Header */}
      <div className="relative isolate overflow-hidden bg-cruz-ink">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="flex items-center gap-2.5 font-display text-[13px] font-bold uppercase tracking-[0.16em] text-cruz-yellow">
            <span className="h-0.5 w-[18px] flex-none bg-cruz-yellow" aria-hidden="true" />
            Project gallery
          </p>
          <h1 className="mt-3 text-balance font-display text-4xl font-extrabold uppercase leading-[0.94] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8">
              {description}
            </p>
          )}
        </div>
        <div className="hazard-stripe" aria-hidden="true" />
      </div>

      {/* Carousel */}
      <div className="bg-gray-50 py-10 sm:py-14">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          {imageSrc.length === 0 ? (
            <p className="rounded-sm bg-white p-8 text-center text-gray-600 ring-1 ring-gray-200">
              Photos for this gallery are on their way.
            </p>
          ) : (
            <>
              <div className="relative">
                <div className="embla overflow-hidden rounded-sm ring-1 ring-gray-200" ref={emblaRef}>
                  <div className="embla__container flex">
                    {imageSrc.map((image, index) => (
                      <div
                        key={index}
                        className="embla__slide relative aspect-video min-w-0 flex-[0_0_100%] bg-gray-200"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 896px"
                          className="object-cover"
                          priority={index === 0}
                          loading={index === 0 ? undefined : 'lazy'}
                          quality={78}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {imageSrc.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={scrollPrev}
                      className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm bg-cruz-ink/75 text-white backdrop-blur transition hover:bg-cruz-ink"
                    >
                      <span className="sr-only">Previous photo</span>
                      <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={scrollNext}
                      className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm bg-cruz-ink/75 text-white backdrop-blur transition hover:bg-cruz-ink"
                    >
                      <span className="sr-only">Next photo</span>
                      <ChevronRightIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </>
                )}
              </div>

              <p
                className="mt-3 text-center font-display text-sm uppercase tracking-widest text-gray-500 tabular-nums"
                aria-live="polite"
              >
                {selected + 1} / {imageSrc.length}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Conversion + internal linking. A gallery with only a "home" button is
          a dead end for visitors and crawlers alike. */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-sm border-l-4 border-cruz-yellow bg-gray-50 p-6 text-center ring-1 ring-gray-200 sm:p-10">
            <h2 className="text-balance font-display text-3xl font-extrabold uppercase leading-tight text-gray-900 sm:text-4xl">
              Need a licensed electrician for a job like this?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-600">
              Cruz Electric serves Storm Lake, Cherokee, Aurelia, Larrabee and all of Buena Vista
              and Cherokee Counties. Free estimates on every job.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button href={SITE.phoneHref} variant="primary" size="lg">
                <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                Call {SITE.phoneDisplay}
              </Button>
              <Button href={quoteMailto} variant="secondary" size="lg">
                Request a quote
              </Button>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/gallary"
              className="font-display text-base font-extrabold uppercase tracking-wide text-cruz-blue hover:text-cruz-dark-blue"
            >
              &larr; All galleries
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
