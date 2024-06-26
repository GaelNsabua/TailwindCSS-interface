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
        back: "url('images/img-8.jpeg')",
        bodyBack: "url('images/img-13.jpeg')"
      },
      width: {
        almost: "97%",
      },
      height: {
        almost: "95%",
        main: "90%",
        again: "93%",
      }
    },
  },
  plugins: [],
}

