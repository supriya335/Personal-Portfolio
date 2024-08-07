/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      boxShadow: {
        'custom-lg': '0 10px 15px -3px rgba(72, 61, 139, 0.7), 0 4px 6px -2px rgba(72, 61, 139, 0.5)',
      },
      backgroundImage: {
        'asymmetric-gradient': 'linear-gradient(to bottom right, #1f2937 25%, #6b7280 50%, #1f2937 75%)',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  variants: {
    boxShadow: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}

