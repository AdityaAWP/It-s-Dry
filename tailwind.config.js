/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jersey: ["'Jersey 15'", "sans-serif"],
        condensed: ["'Roboto Condensed'", "sans-serif"],
      },
      colors: {
        primary: "#AA8B56",
        accent: "#4E6C50",
      },
    },
  },
  plugins: [],
};
