/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        normal: '#ffd9d4',
        urgent: '#d4d7ff',
      },
    },
  },
  plugins: [],
};
