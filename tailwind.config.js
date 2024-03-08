/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'my-dark-brown': '#2D2A1D',
      'my-dark-blue': '#435F75',
      'my-gray': '#9E9E90',
      'my-white': '#F7F7F9',
      'my-yellow': '#F3CB89',
    },
    fontFamily: {
      'kaiven': ['Kaiven', 'sans-serif'],
      'bellenia-love': ['"Bellenia Love"', 'sans-serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'spin-slow-reverse': 'spin 5s linear infinite reverse',
      },
    },
  },
  plugins: [],
}