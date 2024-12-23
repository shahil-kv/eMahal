/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-primeui'),
    require('./src/assets/js/tailwind-plugins/commonTailwind'), // Add your custom plugin
  ],
};
