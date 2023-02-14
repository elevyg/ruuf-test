/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: "var(--poppins-font)",
    },
    extend: {
      colors: {
        primary: "#5b6fd6",
        secondary: "#ebcf4d",
      },
    },
  },
  plugins: [],
};
