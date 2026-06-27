/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1B2A41',
        gold: '#C9A84C',
        cream: '#FAF8F4',
      },
    },
  },
  plugins: [],
};
