/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        overlock: ["Overlock", "cursive"],
        cookie: ["Cookie", "cursive"],
        sacramento: ["Ssacramento", "cursive"],
        boogaloo: ["Boogaloo", "cursive"],
      },
    },
  },
  plugins: [],
};
// font-family: ;
// font-family: 'Sacramento', cursive;
