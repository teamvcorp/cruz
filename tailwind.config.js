/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cruz: {
          blue: '#005cbb',
          'dark-blue': '#003770',
          yellow: '#ffcd02',
          red: '#fe3463',
          'blue-grey': '#8299b1',
          grey: '#ded7d7',
        },
      },
      fontFamily: {
        // --font-lato is provided by next/font/google in app/layout.js. The
        // fallback stack matters: it is what renders during the swap window.
        sans: ['var(--font-lato)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
