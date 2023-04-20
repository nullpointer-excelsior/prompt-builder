/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary-color': '#FFAD35',
        'light-primary-color': '#FFDE8F',
        'primary-color': '#FFCE46',
        'accent-color': '#B47D1D'
      }
    },
  },
  plugins: [],
}

