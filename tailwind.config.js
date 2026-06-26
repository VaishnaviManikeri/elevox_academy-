/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "deep-black": "#020808",
        "charcoal-black": "#071212",
        "dark-teal": "#0D2A29",
        "emerald-teal": "#18C8A3",
        "mint-green": "#8FEFD5",
        "silver-chrome": "#D8E5DF",
        "soft-gray": "#9CA8A3",
      },
    },
  },
  plugins: [],
}
