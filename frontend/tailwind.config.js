/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c6ff00',      
        secondary: '#a3e635',   
        background: '#0f172a',  
      },
    },
  },
  plugins: [],
}
