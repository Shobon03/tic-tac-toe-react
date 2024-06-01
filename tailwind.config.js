/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        prata: 'Prata, sans-serif',
        inter: 'Inter, sans-serif',
        syne: 'Syne, sans-serif',
      },
    },
  },
  plugins: [],
};
