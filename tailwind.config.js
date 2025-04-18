/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          'darkest': '#170C02',
          'dark' : '#773D08 ',
          'pure' : '#D66E0F',
          'lighter' : '#F3A258',
          'lightest' : '#FAD7B7',
          'greybtn' : '#c6c8d2',
          'paragraph' : '#7c8295',
          'title' : '#2c2e38'
        }
      },
    },
    plugins: [],
  }
  