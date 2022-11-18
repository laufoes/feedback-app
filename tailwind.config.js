/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'bodyColor': '#ffffff',
        'cardColor': '#333333',
        'primary': '#202142',
        'secondary': '#ff6a95',
        'disabled': '#cccccc',
        'bgRating': '#f4f4f4',
        'bgHeader': 'rgba(0,0,0,0.4)'
      },
      fontSize: {
        'body': '18px'
      },
    },
  },
  plugins: [],
}
