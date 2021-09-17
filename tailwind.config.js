const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './shimmeredModules/**/*.{js,ts,jsx,tsx}', './modules/**/*.{js,ts,jsx,tsx}', './promotional/**/*.{js,ts,jsx,tsx}'],
    safelist: [
      'text-green-400',
      'text-green-500',
      'text-yellow-400',
      'text-yellow-500',
      'text-yellow-600',
      'text-yellow-700',
      'text-red-400',
      'text-red-500',
      'text-blue-400',
      'text-blue-500',
      'text-gray-900',
      'text-indigo-500',

    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      scale: {
        '500': '5',
      },
      backgroundImage: (theme) => ({
        check: "url('/icons/check.svg')",
        darkcheck: "url('/icons/darkcheck.svg')",
      }),
      spacing: {
        '11': '2.75rem',
        '384': '96rem',
      },
      zIndex: {
        '-1': '-1',
      },
      margin: {
        '380': '38rem',
      },
      screens: {
        'navl': '1278px',
      },
      colors: {
        indigo: {
          50: '#f5f0ff',
          100: '#ebe0ff',
          200: '#dac8fe',
          300: '#c3a6fc',
          400: '#a982f8',
          500: '#9364f2',
          600: '#7c48e5',
          700: '#6a3acb',
          800: '#552fa2',
          900: '#492e7f'
        },
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: []
}
