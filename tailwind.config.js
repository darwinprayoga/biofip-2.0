/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: '"Gilroy-Medium"'
      },
      colors: {
        smoke: '#F2F2F6',
        stabilo: '#32D74B',
        gray: {
          600: "#D1D1D6",
          700: "#6C6C70",
          800: "#1C1C1F",
          trans: 'rgba(118, 118, 128, 0.24)'
        },
        blue: {
          600: "#007AFF",
          700: "#0075F5"
        },
      }
    },
  },
  plugins: [],
}