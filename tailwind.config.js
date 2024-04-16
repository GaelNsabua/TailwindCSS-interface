/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#FFFEE5'
        }
      },
      backgroundImage: {
        back: "url('images/img-3.jpeg')",
      }
    },
  },
  plugins: [],
}

