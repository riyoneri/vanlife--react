/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url(./assets/images/hero.png)",
        about: "url(./assets/images/about.png)",
      },
      height: {
        "hero-screen": "calc(100vh - 6rem)",
        screen: "calc(100vh - 6rem)",
      },
    },
  },
  plugins: [],
};
