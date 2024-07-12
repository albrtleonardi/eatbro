/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'chillax' : ['Chillax', 'sams-serif'],
        'inter' : ['Inter', 'sans-serif'],
        'satoshi' : ['Satoshi', 'sans-serif'],
        'montserrat' : ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}