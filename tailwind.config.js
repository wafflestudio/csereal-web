/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      neutral: colors.neutral,
      white: {
        DEFAULT: '#ffffff',
      },
      'main-orange': {
        DEFAULT: '#f98438',
        dark: '#cf5c10',
      },
      link: {
        DEFAULT: '#3c7be4',
      },
      visited: {
        // TBD
        DEFAULT: '#ff0000',
      },
    },
    fontFamily: {
      yoon: ['var(--font-yoon)'],
      noto: ['var(--font-noto)'],
    },
    extend: {},
  },
  plugins: [],
};
