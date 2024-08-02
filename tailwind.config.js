/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{svelte,html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#fcfcfc',
          dark: '#000000',
          medium: '#754999',
          accent1: '#8c05b5',
          accent2: '#6e128a',
        },
      },
    },
  },
  plugins: [],
}
