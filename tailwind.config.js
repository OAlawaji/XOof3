/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue1': '#535C91',
        'blue2': '#070F2B',
        // Add more colors as needed
      },
    },
  },
  plugins: [],
}