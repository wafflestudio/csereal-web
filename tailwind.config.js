/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/.internal/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      neutral: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        850: '#1e1e1e',
        900: '#171717',
        950: '#0a0a0a',
      },
      white: {
        DEFAULT: '#ffffff',
      },
      'main-orange': {
        DEFAULT: '#ff6914',
        dark: '#e65817',
      },
      link: {
        DEFAULT: '#3c7be4',
      },
      visited: {
        // TBD
        DEFAULT: '#ff0000',
      },
      transparent: 'transparent',
    },
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.8125rem', // 13px changed
      md: '0.875rem', // 14px changed
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.375rem', // 22px changed
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
    },

    extend: {
      keyframes: {
        stretch: {
          '0%': { width: '10px' },
          '100%': { width: '100%' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        stretch: 'stretch 0.7s ease-out',
        fadeIn: 'fadeIn 2s ease-out',
      },
    },
  },
  plugins: [],
};
