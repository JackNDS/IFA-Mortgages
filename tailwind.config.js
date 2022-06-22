/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        'gothambook': ['gothambook', 'sans-serif'],
        'gothambold': ['gothambold', 'sans-serif'],
        'gothammedium': ['gothammedium', 'sans-serif'],
        'gothamxlight': ['gothamxlight', 'sans-serif'],
        'gothamthin': ['gothamthin', 'sans-serif'],
        'gothamblack': ['gothamblack', 'sans-serif'],
        'gothamlight': ['gothamlight', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
