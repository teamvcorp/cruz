/** @type {import('tailwindcss').Config} */

/**
 * Palette is sampled from the official logo, not matched by eye.
 *
 * `cruz-blue` was #005cbb before; the logo's swoosh actually reads #005CB9.
 * Two units is invisible in isolation but leaves a faint seam where the logo
 * PNG meets the header background, because the swoosh bleeds to the edge of
 * the image. The exact value is what makes that edge disappear.
 */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cruz: {
          blue: '#005cb9',        // logo "ELECTRIC" fill + swoosh
          'dark-blue': '#00306b', // swoosh shadow
          ink: '#0b0e14',         // near-black, blue-biased — logo outlines
          yellow: '#ffcd02',      // lightning bolt
          red: '#fe3463',         // outer stroke — primary CTA only
          'blue-grey': '#8299b1', // generator category tag
          // `grey: #ded7d7` removed — it appeared nowhere in the codebase.
        },
      },
      fontFamily: {
        // Body. --font-lato is provided by next/font/google in app/layout.js.
        sans: ['var(--font-lato)', 'system-ui', 'sans-serif'],
        // Display. Condensed to echo the logo's varsity letterforms.
        display: ['var(--font-display)', 'Arial Narrow', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Buttons sit on a hard bottom edge rather than a soft drop shadow —
        // consistent with the logo's flat outlined construction.
        'btn-red': '0 3px 0 #b3183f',
        'btn-blue': '0 3px 0 #00306b',
        'btn-bolt': '0 3px 0 #c79f00',
      },
    },
  },
  plugins: [],
}
