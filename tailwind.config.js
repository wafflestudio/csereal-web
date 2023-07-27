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
        DEFAULT: '#ff6914',
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
    fontSize: {
      xs: '0.75rem',
      sm: '0.8125rem',
      md: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.375rem',
      '2xl': '1.5rem',
    },

    extend: {},
  },
  plugins: [],
};
