"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { HomeIcon } from '@heroicons/react/24/solid';

const PictureContainer = ({ imageSrc }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Gallery carousel */}
      <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="embla overflow-hidden rounded-2xl shadow-lg" ref={emblaRef}>
          <div className="embla__container flex">
            {imageSrc?.map((image, index) => (
              <div key={index} className="embla__slide relative aspect-video flex-[0_0_100%] min-w-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Home button */}
      <div className="flex justify-center py-10">
        <Link
          href="/"
          className="inline-flex flex-col items-center gap-2 rounded-full bg-cruz-dark-blue px-8 py-4 text-sm font-bold uppercase text-white shadow-lg transition-colors hover:bg-cruz-blue"
        >
          <HomeIcon className="h-6 w-6" />
          Home
        </Link>
      </div>
    </div>
  );
};

export default PictureContainer;