/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(45deg, #2f4680, #500ae4)',
        'search-img':'./src/assets/images/search.png'
      },
    },
  },
  plugins: [],
}

