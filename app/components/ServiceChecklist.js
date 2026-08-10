import { CheckCircleIcon } from '@heroicons/react/24/solid'

/**
 * Service list. Extracted from the identical block that appeared on all six
 * location pages plus the electrician page.
 *
 * The list itself is passed in rather than hardcoded: every location orders
 * and trims its own set in app/lib/locations.js, because a Larrabee farmstead
 * and a Storm Lake storefront do not need the same twelve bullets. That
 * difference is the point -- identical lists across six pages is what made
 * them read as templates.
 */
export default function ServiceChecklist({ services, tone = 'dark' }) {
  const isLight = tone === 'light'
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3"
    >
      {services.map((service) => (
        <li key={service} className="flex gap-x-3">
          <CheckCircleIcon
            className="h-6 w-6 flex-none text-cruz-yellow"
            aria-hidden="true"
          />
          <span className={`text-base leading-7 ${isLight ? 'text-gray-300' : 'text-gray-700'}`}>
            {service}
          </span>
        </li>
      ))}
    </ul>
  )
}
