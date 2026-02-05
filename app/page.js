'use client'

import Image from "next/image";
import Link from "next/link";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import {
  BoltIcon,
  BuildingOffice2Icon,
  WrenchScrewdriverIcon,
  VideoCameraIcon,
  CpuChipIcon,
  StarIcon,
} from '@heroicons/react/24/solid'

const services = [
  {
    title: 'Residential',
    href: '/gallary/residential',
    color: 'bg-cruz-blue',
    icon: BoltIcon,
    imageSrc: '/residential.jpg',
    description:
      'At Cruz Electric, we specialize in providing exceptional residential electrical repair services, ensuring that your home remains a safe, functional, and comfortable space for you and your loved ones. Understanding the critical importance of a well-maintained electrical system, we dedicate ourselves to delivering solutions that address your specific needs with precision and care.',
  },
  {
    title: 'Commercial',
    href: '/gallary/commercial',
    color: 'bg-cruz-yellow',
    icon: BuildingOffice2Icon,
    imageSrc: '/commercial.jpg',
    description:
      'Cruz Electric is your trusted partner for comprehensive commercial electrical repair services, dedicated to ensuring your business operations run smoothly and efficiently. We recognize the unique challenges and high standards required for commercial electrical systems, which is why we offer specialized repair solutions tailored to meet the demands of businesses of all sizes.',
  },
  {
    title: 'Agricultural',
    href: '/gallary/agricultural',
    color: 'bg-cruz-dark-blue',
    icon: WrenchScrewdriverIcon,
    imageSrc: '/agricultural.jpg',
    description:
      'In the dynamic and demanding world of agriculture, Cruz Electric stands out as your dependable source for specialized agricultural electrical repair services. We understand the critical role that reliable electrical systems play in the productivity and efficiency of agricultural operations, from small family farms to large agribusinesses.',
  },
  {
    title: 'Communications',
    href: '/gallary/communications',
    color: 'bg-cruz-red',
    icon: VideoCameraIcon,
    imageSrc: '/communications.jpg',
    description:
      'Cruz Electric excels in providing cutting-edge communications and low-voltage solutions, including the installation and repair of security cameras and other essential systems. Our certified electricians are experts in the latest technologies, ensuring your property is equipped with reliable and efficient communication networks and security measures.',
  },
  {
    title: 'Generator Install',
    href: '/gallary/generator',
    color: 'bg-cruz-blue-grey',
    icon: CpuChipIcon,
    imageSrc: '/generator.jpg',
    description:
      'Cruz Electric is proud to specialize in the installation of Generac generators, offering top-tier solutions for uninterrupted power supply to homes and businesses alike. Our skilled electricians are trained and certified to install Generac generators, ensuring your installation is performed to the highest standards of safety and efficiency.',
  },
]

const testimonials = [
  {
    name: 'Laurie Rasmussen',
    text: 'Cruz electric installed a stand-by generator for me. They had the estimate and installation done in a very timely manner. He also helped me download the app on my phone. He did a thorough explanation of how the generator works and went through the whole process of what happens when electricity goes out and comes back on again. Very satisfied with the work and follow up maintenance schedule and that the work area left clean. Good Job.',
  },
  {
    name: 'Bud and LuAnn',
    text: 'Isaac Cruz and his crew with Cruz Electric installed electricity to a building in our backyard. They were quick to respond to our inquiry with an estimate, scheduled the work when it was convenient with our travel plans and their schedule. They called Iowa One Call for utility locations. Cruz Electric came when they said they would come!! Everyone on the crew was friendly, kind, efficient and completed the job with superior work! We highly recommend Isaac Cruz and Cruz Electric for any of your electrical needs.',
  },
  {
    name: 'Erin Smith',
    text: 'Cruz electrical was very professional! They were easy to work with and I felt confident they could handle anything I threw at them. Would definitely call them again.',
  },
  {
    name: 'David Orthman',
    text: 'I am very pleased with the work that Cruz Electric did for me installing my Generac generator. Though I obviously hope I don\'t need to use it I am confident it will take care of all my electrical needs if I do.',
  },
  {
    name: 'Cat R',
    text: 'Wonderful experience! They got an old house all fixed up. Fixed outside lighting that hadn\'t worked in over a decade. Couldn\'t be happier!',
  },
]

const faqs = [
  {
    question: 'What areas do you serve?',
    answer:
      'Cruz Electric serves Storm Lake, Cherokee, and all surrounding areas in Iowa. We are expanding our reach to serve even more communities across the region.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes! Cruz Electric is fully licensed and insured. We take pride in meeting all safety standards and legal requirements to give our customers complete peace of mind.',
  },
  {
    question: 'What types of electrical services do you offer?',
    answer:
      'We offer a wide range of services including residential electrical repair, commercial electrical services, agricultural electrical systems, communications and low-voltage solutions (including security cameras), and Generac generator installation.',
  },
  {
    question: 'Do you install Generac generators?',
    answer:
      'Yes! Cruz Electric specializes in the installation of Generac generators. Our skilled electricians are trained and certified to install Generac generators to the highest standards of safety and efficiency, providing uninterrupted power supply for your home or business.',
  },
  {
    question: 'How can I request a quote?',
    answer:
      'You can request a quote by calling us at (712) 299-7004 or by emailing us at cruzelectric712@gmail.com. We respond quickly to all inquiries and are happy to provide a free estimate for your project.',
  },
  {
    question: 'Do you offer an apprenticeship program?',
    answer:
      'Yes! Ask us about our apprenticeship program. We are committed to training the next generation of skilled electricians and welcome inquiries from those interested in starting a career in the electrical trade.',
  },
]

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero.jpg"
            alt="Cruz Electric hero"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Gradient blobs */}
        <div aria-hidden="true" className="absolute -top-40 -z-10 transform-gpu blur-3xl sm:-top-80">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-cruz-yellow to-cruz-blue opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center rounded-full bg-cruz-yellow/90 px-4 py-1.5 text-sm font-bold text-gray-900">
              Licensed &amp; Insured — Serving Storm Lake &amp; Surrounding Area
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Empowering Your Space with Expert Electrical Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Cruz Electric provides reliable residential, commercial, and agricultural electrical services. From repairs to Generac generator installations, we cruise right through it!
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="mailto:cruzelectric712@gmail.com?subject=Please reach out to me for a quote"
                className="rounded-md bg-cruz-red px-6 py-3 text-center text-sm font-semibold text-white shadow-lg hover:bg-red-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cruz-red"
              >
                Request A Quote
              </a>
              <a
                href="tel:7122997004"
                className="rounded-md bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 transition-colors"
              >
                Call (712) 299-7004
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-cruz-blue">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Electrical Solutions You Can Trust
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From residential repairs to commercial installations, Cruz Electric delivers quality workmanship for every project.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-8 sm:mt-16 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 transition-shadow hover:shadow-xl"
              >
                {/* Service header bar */}
                <div className={`${service.color} flex items-center gap-x-3 px-5 py-3`}>
                  <service.icon className="h-6 w-6 text-white" />
                  <h3 className="text-lg font-bold uppercase text-white tracking-wide">
                    {service.title}
                  </h3>
                </div>

                {/* Service image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Description */}
                <div className="flex flex-1 flex-col p-5">
                  <p className="flex-1 text-sm leading-6 text-gray-600">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 transition-colors"
                  >
                    View Gallery
                    <span aria-hidden="true" className="ml-2">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="relative overflow-hidden bg-gray-900 py-16 sm:py-24">
        <div className="absolute inset-0">
          <Image
            src="/header.jpg"
            alt="Cruz Electric team"
            fill
            className="object-cover brightness-[0.15] saturate-50"
          />
        </div>
        <div aria-hidden="true" className="absolute -left-80 -top-56 transform-gpu blur-3xl">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-cruz-yellow to-cruz-blue opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-cruz-yellow">About Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Cruz Electric — We Cruise Right Through It!
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Cruz Electric opened in 2020 in Cherokee, Iowa. We are expanding to our new location in Storm Lake, Iowa and all surrounding areas. We are here to serve the customer and provide excellent service.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-3 lg:mx-0 lg:max-w-none">
            <div className="flex flex-col items-center rounded-2xl bg-white/5 p-8 ring-1 ring-inset ring-white/10 backdrop-blur-sm">
              <p className="text-4xl font-bold text-cruz-yellow">5+</p>
              <p className="mt-2 text-sm text-gray-300">Years of Experience</p>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-white/5 p-8 ring-1 ring-inset ring-white/10 backdrop-blur-sm">
              <p className="text-4xl font-bold text-cruz-yellow">100%</p>
              <p className="mt-2 text-sm text-gray-300">Licensed &amp; Insured</p>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-white/5 p-8 ring-1 ring-inset ring-white/10 backdrop-blur-sm">
              <p className="text-4xl font-bold text-cruz-yellow">5★</p>
              <p className="mt-2 text-sm text-gray-300">Customer Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials / Reviews Section */}
      <div id="reviews" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-cruz-blue">Reviews</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Customers Say
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-6 sm:mt-16 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((review) => (
              <div
                key={review.name}
                className="flex flex-col rounded-2xl bg-gray-50 p-6 shadow-sm ring-1 ring-gray-200"
              >
                {/* Stars */}
                <div className="flex gap-x-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-cruz-yellow" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1">
                  <p className="text-sm leading-6 text-gray-600">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </blockquote>
                <div className="mt-4 border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-900">— {review.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-base font-semibold leading-7 text-cruz-blue">FAQ</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </p>
            <dl className="mt-10 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                  <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base font-semibold leading-7">{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                        <PlusIcon aria-hidden="true" className="h-6 w-6 group-data-[open]:hidden" />
                        <MinusIcon aria-hidden="true" className="h-6 w-6 hidden group-data-[open]:block" />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Apprenticeship CTA Banner */}
      <div className="bg-cruz-red">
        <div className="mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:flex lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Ask About Our Apprenticeship Program!
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/80">
              We&apos;re committed to training the next generation of skilled electricians.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
            <a
              href="tel:7122997004"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-cruz-red shadow-sm hover:bg-gray-100 transition-colors"
            >
              Call Us Today
            </a>
            <a
              href="mailto:cruzelectric712@gmail.com?subject=Apprenticeship Program Inquiry"
              className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 transition-colors"
            >
              Learn More <span aria-hidden="true" className="ml-1">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
