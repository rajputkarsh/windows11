/** @type {import('tailwindcss').Config} */

import flowbitePlugin from 'flowbite/plugin'
import prettierPlugin from 'prettier-plugin-tailwindcss'

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [flowbitePlugin, prettierPlugin],
};