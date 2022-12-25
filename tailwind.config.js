/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'mobile-menu-enter':'enter 0.3s ease-out forwards',
        'slide':'slide 25s linear infinite',
        'slideBrands':'slideBrands 20s linear infinite',
        'infiniteSlide':'infiniteSlideLeft 5s linear infinite',
        'grow':'grow 0.9s linear infinite'
      },gridTemplateRows: {
        // Simple 16 column grid
        '7': 'repeat(7, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}