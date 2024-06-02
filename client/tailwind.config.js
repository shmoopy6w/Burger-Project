/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./src/assets/hero.png')",
        'g4': "url('./src/assets/g4_bg.png')",
        'g2': "url('./src/assets/g2_bg.png')",
        'g7': "url('./src/assets/g7_bg.png')",
        'g6': "url('./src/assets/g6_bg.png')",
        'burg': "url('./src/assets/burg.png')",


      }
    },
  },
  plugins: [],
}

