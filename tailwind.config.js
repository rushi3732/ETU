/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // darkMode: false,

  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        customBlue: "#0B83A5",
        customGreen: "#368505",
        customOrange: "#E3902F",
        customRed: "#D11A2A",
      },
    },
  },
  // plugins: [require("tailwind-scrollbar")],
  // variants: {
  //   extend: {
  //     visibility: ["group-hover"],
  //   },
  // },
};
