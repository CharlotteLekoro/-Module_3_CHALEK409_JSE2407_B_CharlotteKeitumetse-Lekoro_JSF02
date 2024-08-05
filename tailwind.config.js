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
          medium: '#804747',
          accent1: '#8c4433',
          accent2: '#c95c3b',
        },
      },
    },
  },
  plugins: [],
}

