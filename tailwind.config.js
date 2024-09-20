/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2FB95D',
        'primary-hover': '#259a4b',
        'secondary': '#043A3A',
        'fontcolor': '#525252'
      },
      fontFamily: {
        sans: ['Raleway', 'Arial', 'sans-serif'],
        secondary: ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
