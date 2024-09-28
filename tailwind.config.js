/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          700: '#6989c4',
          800: '#1D4E89',
        },
      },
    },
  },
  plugins: [],
};
