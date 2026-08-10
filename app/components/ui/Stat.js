/**
 * A single figure in a trust band.
 *
 * The yellow left rule is the recurring "live conductor" mark used for
 * emphasis blocks across the site, so a stat reads as the same family of
 * object as the unique-content callout on a location page.
 *
 * tabular-nums keeps the digits aligned when several sit in a row.
 */
export default function Stat({ value, label, tone = 'dark' }) {
  const isLight = tone === 'light'
  return (
    <div
      className={`rounded-sm border-l-4 border-cruz-yellow px-5 py-4 ${
        isLight
          ? 'bg-gray-50 ring-1 ring-gray-200'
          : 'bg-white/[0.04] ring-1 ring-inset ring-white/15'
      }`}
    >
      <p className="font-display text-4xl font-extrabold leading-none tabular-nums text-cruz-yellow sm:text-5xl">
        {value}
      </p>
      <p className={`mt-2 text-sm ${isLight ? 'text-gray-600' : 'text-gray-300'}`}>{label}</p>
    </div>
  )
}
