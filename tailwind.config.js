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


      'text-purple-100',
      'text-indigo-100',
      'text-blue-100',
      'text-green-100',
      'text-yellow-100',
      'text-red-100',
      'text-gray-100',
      'text-pink-100',

      'ring-purple-500',
      'ring-indigo-500',
      'ring-blue-500',
      'ring-green-500',
      'ring-yellow-500',
      'ring-red-500',
      'ring-gray-500',
      'ring-pink-500',
      

      'bg-purple-700',
      'bg-indigo-700',
      'bg-blue-700',
      'bg-green-700',
      'bg-yellow-700',
      'bg-red-700',
      'bg-gray-700',
      'bg-pink-700',

      'checked:bg-purple-500',
      'checked:bg-indigo-500',
      'checked:bg-blue-500',
      'checked:bg-green-500',
      'checked:bg-yellow-500',
      'checked:bg-red-500',
      'checked:bg-gray-500',
      'checked:bg-pink-500',

      'md:w-1/4',
      'md:w-2/4',
      'w-24',
      'w-16',
      'w-40',
      'w-20',
      'h-10',
      'w-7',
      'w-1/12',
      'w-44',
      'w-40',
      'w-36',
      'w-32',
      'h-7',
      'h-6',
      'rounded-sm',

      'bg-green-400',
      'bg-green-500',
      'bg-yellow-400',
      'bg-yellow-500',
      'bg-yellow-600',
      'bg-yellow-700',
      'bg-red-400',
      'bg-red-500',
      'bg-blue-400',
      'bg-blue-500',
      'bg-gray-900',
      'bg-indigo-500',

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
