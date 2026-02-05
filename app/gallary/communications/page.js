"use client"
import PictureContainer from "@/app/components/PictureContainer";
import { commImages } from "@/app/lib/images/images";
import Link from "next/link";
import { HomeIcon } from '@heroicons/react/24/solid';

const Communications = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Communications Gallery
        </h1>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          Browse our communications and low-voltage project work.
        </p>
      </div>
      <PictureContainer imageSrc={commImages} />
    </div>
  );
};

export default Communications;