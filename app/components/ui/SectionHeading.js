/**
 * Eyebrow + title, with the heading hierarchy the right way round.
 *
 * The old markup had this inverted: the small eyebrow text was an <h2> and the
 * visually dominant title below it was a <p>. Roughly half the site's <h2>
 * elements were eyebrows. Screen readers and Google both build their outline
 * from heading elements, so the document structure claimed the page was about
 * "FAQ" and "Service Areas" rather than the actual titles.
 *
 * Here the eyebrow is always a <p> and the title is always a real heading.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  as: Tag = 'h2',
  align = 'left',
  tone = 'dark',
  className = '',
}) {
  const isLight = tone === 'light'
  const alignCls = align === 'center' ? 'text-center mx-auto items-center' : 'items-start'

  return (
    <div className={`flex max-w-3xl flex-col gap-3 ${alignCls} ${className}`}>
      {eyebrow && (
        <p
          className={`flex items-center gap-2.5 font-display text-[13px] font-bold uppercase tracking-[0.16em] ${
            isLight ? 'text-cruz-yellow' : 'text-cruz-blue'
          }`}
        >
          <span className="h-0.5 w-[18px] flex-none bg-cruz-yellow" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <Tag
        className={`text-balance font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl lg:text-6xl ${
          isLight ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </Tag>
      {intro && (
        <p className={`max-w-2xl text-base leading-7 sm:text-lg ${isLight ? 'text-gray-300' : 'text-gray-600'}`}>
          {intro}
        </p>
      )}
    </div>
  )
}
