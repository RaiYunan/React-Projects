/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

        mixBlendCode:{
          "color-burn":"color-burn"

        },
        fontFamily:{
          "inputBox":"'Courier New', Courier, monospace"
        }
      
    },
  },
  plugins: [],
}

