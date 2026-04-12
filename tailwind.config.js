/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#ffffff",
        lightText: "#191970",
        designColor: "#191970",
        midnightBlue: "#191970",
      },
      boxShadow: {
        shadowOne: "0px 10px 30px -10px rgba(25, 25, 112, 0.1)",
      },
    },
  },
  plugins: [],
};
