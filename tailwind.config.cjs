/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sbc-red": "#EC4E21",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-text-fill-stroke")(),
    require("tailwind-clip-path"),
    require("tailwind-scrollbar"),
    require("@headlessui/tailwindcss")({ prefix: "hu" }),
  ],
};
