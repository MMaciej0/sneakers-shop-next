/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    maxWidth: {
      container: '1520px',
      contentContainer: '1280px',
    },
    extend: {
      colors: {
        highlight: '#3bcfff',
        primary: '#474747',
        primaryBg: '#fff',
        secondaryBg: '#cfcfcf',
      },
    },
  },
  plugins: [],
};
