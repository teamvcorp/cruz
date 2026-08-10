/**
 * Section wrapper — one vertical rhythm for the whole site.
 *
 * Three competing padding scales were in use before: `py-16 sm:py-24` on the
 * homepage, `py-24 sm:py-32` on the electrician and location pages, and an
 * ad-hoc `pt-10`/`pb-16` in the gallery. Same conceptual section, three sizes.
 */

const TONES = {
  white: 'bg-white text-gray-900',
  muted: 'bg-gray-50 text-gray-900',
  navy: 'bg-cruz-dark-blue text-white',
  ink: 'bg-cruz-ink text-white',
  brand: 'bg-cruz-blue text-white',
}

const SPACE = {
  none: '',
  sm: 'py-10 sm:py-14',
  md: 'py-16 sm:py-24',
  lg: 'py-20 sm:py-28',
}

export default function Section({
  tone = 'white',
  space = 'md',
  hazardTop = false,
  hazardBottom = false,
  className = '',
  innerClassName = '',
  children,
  ...props
}) {
  return (
    <section className={`${TONES[tone] ?? TONES.white} ${className}`} {...props}>
      {hazardTop && <div className="hazard-stripe" aria-hidden="true" />}
      <div className={`mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 ${SPACE[space] ?? SPACE.md} ${innerClassName}`}>
        {children}
      </div>
      {hazardBottom && <div className="hazard-stripe" aria-hidden="true" />}
    </section>
  )
}
