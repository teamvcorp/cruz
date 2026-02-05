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
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
