import Link from 'next/link'

/**
 * The single button in the system.
 *
 * Before this existed the same red primary CTA was written six different ways
 * across the codebase -- differing in shadow weight, transition, padding, and
 * whether it had a focus ring at all (only two of the six did). Every variant
 * here is keyboard-focusable and hits the 44px minimum touch target at `lg`.
 *
 * Renders <Link> for internal hrefs, <a> for tel:/mailto:/external, and
 * <button> when no href is given -- so callers never have to think about it.
 */

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-sm font-display font-extrabold uppercase tracking-wide ' +
  'transition-[transform,background-color] duration-150 hover:-translate-y-px active:translate-y-0 ' +
  'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-cruz-yellow'

const VARIANTS = {
  // Pink — the logo's outer stroke. Reserved for the primary action on a page.
  primary: 'bg-cruz-red text-white shadow-btn-red hover:bg-[#ff4d75]',
  // Blue — secondary action.
  secondary: 'bg-cruz-blue text-white shadow-btn-blue hover:bg-[#0069d2]',
  // Yellow — highest contrast on the blue header and on dark blocks.
  bolt: 'bg-cruz-yellow text-cruz-ink shadow-btn-bolt hover:bg-[#ffd733]',
  // Outline, for use on photography or dark grounds.
  ghost:
    'bg-white/10 text-white ring-2 ring-inset ring-white/45 hover:bg-white/20 backdrop-blur-sm',
  // Solid white, for use on saturated colour blocks.
  light: 'bg-white text-cruz-ink shadow-[0_3px_0_rgba(0,0,0,.25)] hover:bg-gray-100',
}

const SIZES = {
  sm: 'text-sm px-4 py-2.5',
  md: 'text-base px-5 py-3',
  lg: 'text-lg px-7 py-3.5',
}

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const cls = `${BASE} ${VARIANTS[variant] ?? VARIANTS.primary} ${SIZES[size] ?? SIZES.md} ${className}`

  if (!href) {
    return (
      <button type="button" className={cls} {...props}>
        {children}
      </button>
    )
  }

  // tel:, mailto: and absolute URLs must not go through next/link.
  const isExternal = /^(https?:|tel:|mailto:|#)/.test(href)
  if (isExternal) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={cls} {...props}>
      {children}
    </Link>
  )
}
