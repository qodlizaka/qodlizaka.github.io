/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        'my-dark-brown': '#2D2A1D',
        'my-dark-blue': '#435F75',
        'my-blue': '#83a0b8',
        'my-light-blue': '#cbd8e1',
        'my-gray': '#9E9E90',
        'my-light-gray': '#cecec7',
        'my-white': '#F7F7F9',
        'my-yellow': '#F3CB89',
        'my-light-yellow': '#f6d8a6',
      },
      fontFamily: {
        'kaiven': ['Kaiven', 'sans-serif'],
        'bellenia-love': ['"Bellenia Love"', 'sans-serif'] // Ensure fonts with spaces have " " surrounding it.
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'spin-slow-reverse': 'spin 5s linear infinite reverse',
      },
    },
  },
  plugins: [],
}