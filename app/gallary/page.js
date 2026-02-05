import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const galleries = [
  { name: 'Residential', href: '/gallary/residential', color: 'bg-cruz-blue' },
  { name: 'Commercial', href: '/gallary/commercial', color: 'bg-cruz-yellow' },
  { name: 'Agricultural', href: '/gallary/agricultural', color: 'bg-cruz-dark-blue' },
  { name: 'Communications', href: '/gallary/communications', color: 'bg-cruz-red' },
  { name: 'Generator', href: '/gallary/generator', color: 'bg-cruz-blue-grey' },
]

const GalleryIndex = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Project Gallery
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Browse our completed projects across all service categories.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {galleries.map((gallery) => (
            <Link
              key={gallery.name}
              href={gallery.href}
              className={`${gallery.color} group flex items-center justify-between rounded-xl px-6 py-5 text-white shadow-md transition-shadow hover:shadow-lg`}
            >
              <span className="text-lg font-bold uppercase tracking-wide">{gallery.name}</span>
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GalleryIndex