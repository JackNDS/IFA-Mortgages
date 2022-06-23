/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      xxs: '280px',
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
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
