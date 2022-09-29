/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.jsx", "./index.html"],
  theme: {
    extend: {
      maxWidth: {
        readable: "45ch",
        readableTitle: "15ch",
        readableSubTitle: "60ch",
        readableDefault: "999ch",
      },
      fontFamily: {
        "bank-font": ["Public Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
