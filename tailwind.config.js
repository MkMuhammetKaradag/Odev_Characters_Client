const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://rick-and-morty-chars.netlify.app/static/media/cover.18f506d0.webp')",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
