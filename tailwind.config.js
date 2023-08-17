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
      xs: '0.75rem', // 12px
      sm: '0.8125rem', // 13px changed
      md: '0.875rem', // 14px changed
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.375rem', // 22px changed
      '2xl': '1.5rem', // 24px
    },

    extend: {
      keyframes: {
        stretch: {
          '0%': { width: '10px' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        stretch: 'stretch 0.7s ease-out',
      },
    },
  },
  plugins: [],
};
