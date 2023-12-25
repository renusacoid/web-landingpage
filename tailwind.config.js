/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/assets/bg-hero.png')",
        "custom-gradient":
          "linear-gradient(95deg, #000000 17.36%, #DC602A 76.34%)",
      },
    },
  },
  plugins: [],
};
