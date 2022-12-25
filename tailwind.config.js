/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'infiniteSlide':'infiniteSlideLeft 5s linear infinite',
        'grow':'grow 0.9s linear infinite'
      }
    },
  },
  plugins: [],
}