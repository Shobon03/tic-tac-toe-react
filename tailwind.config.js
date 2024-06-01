/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter, sans-serif',
        syne: 'Syne, sans-serif',
        rubik_mono: 'Rubik Mono One, monospace',
      },
    },
  },
  plugins: [],
};
