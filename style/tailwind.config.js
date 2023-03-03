/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', '../index.html'],
  theme: {
    fontFamily: {
      Mantrope: ['Manrope', 'sans-serif'],
      Golo: ['Golos Text', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        boxShadow: ' 1px 1px 6px 1px rgba(50,50,53, 0.1)'
      },
      colors: {
        'error-red': ' hsl(0, 94%, 66%)',
        'soft-blue': 'hsl(231, 69%, 60%)',
        'dark-blue-nav': ' hsl(229, 31%, 21%)',
        'gray-blue': 'hsl(229, 8%, 60%)',
      },
    },
  },
  plugins: [],
};
