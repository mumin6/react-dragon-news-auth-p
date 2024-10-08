/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins:'"Poppins", sans-serif'
    },
    extend: {},
  },
  plugins: [ daisyui ,],
}

