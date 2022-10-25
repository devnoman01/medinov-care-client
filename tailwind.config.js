/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#212529",
          secondary: "#00d6a3",
          accent: "#9dabaf",
          neutral: "#3d4451",
        },
      },
    ],
  },
};
