/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e2235e',
        secondary: '#1e5c7a',
      },
      fontFamily: {
        baskerville: ['Libre Baskerville', 'serif']
      }
    },
  },
  plugins: [],
}

