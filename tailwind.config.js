
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      heroBackground: "url('./assets/herobackground.jpg')",
    },
    fontFamily: {
      headingFont: "Space Mono",
      bodyFont: "Rubik",
    },
  },
  plugins: [],
};