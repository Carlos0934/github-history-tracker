/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#424041',
          50: '#C6C5C6',
          100: '#BCBABB',
          200: '#A8A6A7',
          300: '#949193',
          400: '#807C7E',
          500: '#6B686A',
          600: '#575455',
          700: '#424041',
          800: '#262425',
          900: '#090909',
          950: '#000000'
        },
      }
    },
  },
  plugins: [],
}

