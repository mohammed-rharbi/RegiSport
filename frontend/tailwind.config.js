/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c6ff00',      // Lime/Neon Green
        secondary: '#a3e635',    // Lime 400
        background: '#0f172a',   // Slate 900
      },
    },
  },
  plugins: [],
}
