import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { StarIcon, TrophyIcon } from '@heroicons/react/24/solid'
import {empImages} from '@/app/lib/images/images'

const galleries = [
  { name: 'Residential', href: '/gallary/residential', color: 'bg-cruz-blue' },
  { name: 'Commercial', href: '/gallary/commercial', color: 'bg-cruz-yellow' },
  { name: 'Agricultural', href: '/gallary/agricultural', color: 'bg-cruz-dark-blue' },
  { name: 'Communications', href: '/gallary/communications', color: 'bg-cruz-red' },
  { name: 'Generator', href: '/gallary/generator', color: 'bg-cruz-blue-grey' },
]

const employees = [
  {
    name: 'Two Dudes',
    role: 'Electrician',
    recognition: 'Licensed Master Electrician with 10+ years experience',
    achievements: ['Licensed Master Electrician', 'Generac Certified Installer', 'Business Owner since 2020'],
    imageUrl: empImages[0].src,
  },
  {
    name: 'Crew Members',
    role: ' Electrician',
    recognition: 'Exceptional craftsmanship and customer service',
    achievements: ['Journeyman Electrician', '8+ years experience', 'Safety Certified'],
    imageUrl: empImages[1].src, 
  },
  {
    name: 'Crew Member',
    role: 'Electrician',
    recognition: 'Exceptional craftsmanship and customer service',
    achievements: ['Journeyman Electrician', '8+ years experience', 'Safety Certified'],
    imageUrl: empImages[2].src, 
  },
  {
    name: 'Crew Member',
    role: 'Electrician',
    recognition: 'Exceptional craftsmanship and customer service',
    achievements: ['Journeyman Electrician', '8+ years experience', 'Safety Certified'],
    imageUrl: empImages[3].src, 
  },
  {
    name: 'Crew Member',
    role: ' Electrician',
    recognition: 'Exceptional craftsmanship and customer service',
    achievements: ['Journeyman Electrician', '8+ years experience', 'Safety Certified'],
    imageUrl: empImages[4].src, 
  },
 
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

      {/* Employee Recognition Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-x-2 mb-4">
              <TrophyIcon className="h-8 w-8 text-cruz-yellow" />
              <h2 className="text-base font-semibold leading-7 text-cruz-blue">Our Team</h2>
            </div>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Licensed Electricians
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our team of professional electricians brings expertise, dedication, and exceptional service to every project. Licensed, certified, and committed to excellence.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            {employees.map((employee) => (
              <div
                key={employee.name}
                className="flex flex-col overflow-hidden rounded-2xl bg-gray-50 shadow-md ring-1 ring-gray-200 transition-shadow hover:shadow-lg"
              >
                {/* Employee Photo */}
                <div className="relative h-72 w-full overflow-hidden bg-gray-200">
                  <Image
                    src={employee.imageUrl}
                    alt={employee.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Employee Info */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-x-2 mb-2">
                    <StarIcon className="h-5 w-5 text-cruz-yellow" />
                    <h3 className="text-xl font-bold text-gray-900">{employee.name}</h3>
                  </div>
                  <p className="text-sm font-semibold text-cruz-blue mb-3">{employee.role}</p>
                  <p className="text-sm leading-6 text-gray-600 mb-4">{employee.recognition}</p>
                  
                  {/* Achievements */}
                  {/* <div className="mt-auto">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Certifications & Achievements
                    </p>
                    <ul className="space-y-1">
                      {employee.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start text-xs text-gray-600">
                          <span className="mr-2 text-cruz-blue">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* Team Values */}
          <div className="mx-auto mt-16 max-w-2xl rounded-2xl bg-cruz-blue p-8 text-center sm:p-10">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Why Our Team Stands Out
            </h3>
            <p className="mt-4 text-base leading-7 text-blue-100">
              Every member of the Cruz Electric team is committed to providing exceptional electrical services with professionalism, safety, and quality workmanship. We invest in ongoing training and certifications to ensure our electricians stay current with the latest electrical codes, technologies, and best practices.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="flex flex-col items-center">
                <p className="text-3xl font-bold text-cruz-yellow">100%</p>
                <p className="mt-2 text-sm text-blue-100">Licensed & Insured</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-3xl font-bold text-cruz-yellow">50+</p>
                <p className="mt-2 text-sm text-blue-100">Years Combined Experience</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-3xl font-bold text-cruz-yellow">5★</p>
                <p className="mt-2 text-sm text-blue-100">Customer Rated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryIndex