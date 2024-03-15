/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['BespokeSerif-Medium', 'sans-serif']
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
