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
      height: {
        '5vh': '5vh',
        '10vh': '10vh',
        '15vh': '15vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '30vh': '30vh',
        '35vh': '35vh',
        '40vh': '40vh',
        '45vh': '45vh',
        '50vh': '50vh',
        '55vh': '55vh',
        '60vh': '60vh',
        '65vh': '65vh',
        '70vh': '70vh',
        '75vh': '75vh',
        '80vh': '80vh',
        '85vh': '85vh',
        '90vh': '90vh',
        '95vh': '95vh',
        '100vh': '100vh',
      },
      fontFamily: {
        roboto: ['Roboto', 'serif']
      }
    },
  },
  plugins: [],
}

