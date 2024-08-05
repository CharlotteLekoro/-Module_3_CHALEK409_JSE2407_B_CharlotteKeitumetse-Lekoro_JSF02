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
          light: '#efefef',
          dark: '#14130a',
          medium: '#c95c95',
          accent1: '#c9443b',
          accent2: '#a4492d',
        },
      },
    },
  },
  plugins: [],
}

