/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        Oswald: ["Oswald", "sans serif"],
        Inter: ["Inter"],
        Poppins: ["Poppins"],
      },
      backgroundImage: {
        heroLight:
          "url('/assets/bg_light.svg')",
        heroDark:
          "url('/assets/bg_dark.svg')",
      },
      colors: {
        primary: "#4682B4",
      },
    },
  },
  plugins: [],
};
