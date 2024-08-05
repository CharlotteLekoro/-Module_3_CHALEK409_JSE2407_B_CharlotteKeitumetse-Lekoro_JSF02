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
          dark: '#121425',
          medium: '#4f2c2c',
          accent1: '#8c4433',
          accent2: '#c95c3b',
        },
      },
    },
  },
  plugins: [],
}

