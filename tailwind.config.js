/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: '#1CC0EF', // Define your custom color and assign the hexadecimal value
      },
    },
  },
  plugins: [],
}

