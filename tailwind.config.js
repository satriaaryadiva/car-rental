/* eslint-disable no-undef */

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#34D399', // Hijau Terang
        secondary: '#10B981', // Hijau Muda
        background: '#F0FDF4', // Hijau Sangat Muda
        text: '#065F46', // Hijau Tua
        white: '#FFFFFF', // Putih
        accent: '#A7F3D0', // Hijau Pastel
        danger: '#F87171', // Merah Muda
      },
    },
  },
  plugins: [],
}
