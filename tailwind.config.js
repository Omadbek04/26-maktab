/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor:{
        footerDarkBg: "rgb(20, 22, 60)",
      }
    },
  },
  plugins: [],
};
