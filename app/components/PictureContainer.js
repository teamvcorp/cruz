"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { HomeIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useCallback, useEffect, useState } from "react";
import { SITE, quoteMailto } from "@/app/lib/site";

/**
 * Gallery carousel.
 *
 * Two things here are load-speed decisions, not styling:
 *  - Only the FIRST slide gets `priority`. Every other slide is explicitly
 *    lazy. Embla keeps all slides mounted and offset horizontally inside an
 *    overflow-hidden track, so without this the browser can be tricked into
 *    fetching all 8 full-size photos during initial page load.
 *  - `sizes` is capped at 896px (the max-w-4xl track width) so next/image never
 *    serves a 1920px derivative into an 896px box.
 */
const PictureContainer = ({ imageSrc, title, description }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6 lg:px-8">
        {/* Every gallery page previously had NO h1 and no text at all -- just a
            carousel. That gave Google nothing to rank. */}
        {title && (
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h1>
            {description && (
              <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="relative">
          <div className="embla overflow-hidden rounded-2xl shadow-lg" ref={emblaRef}>
            <div className="embla__container flex">
              {imageSrc?.map((image, index) => (
                <div
                  key={index}
                  className="embla__slide relative aspect-video min-w-0 flex-[0_0_100%]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 896px) 100vw, 896px"
                    className="object-cover"
                    priority={index === 0}
                    loading={index === 0 ? undefined : "lazy"}
                    quality={78}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Arrows: 44px touch targets, and they sit inside the frame on
              mobile so they never push the layout past the viewport edge. */}
          <button
            type="button"
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-900 shadow-md backdrop-blur transition-colors hover:bg-white"
          >
            <span className="sr-only">Previous image</span>
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-900 shadow-md backdrop-blur transition-colors hover:bg-white"
          >
            <span className="sr-only">Next image</span>
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Slide counter doubles as an accessible status for the autoplay. */}
        <p className="mt-3 text-center text-sm text-gray-500" aria-live="polite">
          {selected + 1} of {imageSrc?.length ?? 0}
        </p>
      </div>

      {/* Conversion + internal linking. A gallery page with only a "Home"
          button is a dead end for both users and crawlers. */}
      <div className="mx-auto mt-10 max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-200 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Need a licensed electrician for a project like this?
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Cruz Electric serves Storm Lake, Cherokee, Aurelia, Larrabee and all of Buena Vista
            and Cherokee Counties. Free estimates on every job.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={SITE.phoneHref}
              className="rounded-md bg-cruz-red px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-500"
            >
              Call {SITE.phoneDisplay}
            </a>
            <a
              href={quoteMailto}
              className="rounded-md bg-cruz-blue px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-600"
            >
              Request A Quote
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/gallary"
            className="inline-flex items-center gap-2 rounded-full bg-cruz-dark-blue px-6 py-3 text-sm font-bold uppercase text-white shadow-lg transition-colors hover:bg-cruz-blue"
          >
            <HomeIcon className="h-5 w-5" />
            All Galleries
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PictureContainer;
