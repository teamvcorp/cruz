/**
 * One panel treatment.
 *
 * The audit found roughly ten different permutations of rounded-2xl /
 * rounded-xl / rounded-lg crossed with shadow-lg / shadow-md / shadow-sm /
 * none, all representing the same conceptual "content panel".
 *
 * Corners are 2px (rounded-sm), not 16px. The logo is built from hard-outlined
 * letterforms; soft 16px corners fought it, which is a large part of why the
 * mark read as a sticker on someone else's template.
 */

const TONES = {
  white: 'bg-white ring-1 ring-gray-200',
  muted: 'bg-gray-50 ring-1 ring-gray-200',
  // Glass panel for use on dark photographic grounds.
  glass: 'bg-white/5 ring-1 ring-inset ring-white/15 backdrop-blur-sm text-white',
}

const PADS = {
  none: '',
  sm: 'p-5',
  md: 'p-6',
  lg: 'p-8',
}

export default function Card({
  tone = 'white',
  pad = 'md',
  className = '',
  children,
  ...props
}) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-sm ${TONES[tone] ?? TONES.white} ${PADS[pad] ?? PADS.md} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
