/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2BC9B2",
        secondary: "#4CAF50",
        accent: "#FFC107",
        red: "#C92B2B",
        white: "#fff",
        blue: "#59ADFF",
      },
    },
  },
  plugins: [],
};
