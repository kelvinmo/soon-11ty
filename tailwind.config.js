const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.md',
    './_includes/**/*.{liquid,md}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      text: '#fdfdfd',
      background: '#2a1e20',
      primary: '#9a728d',
      'primary-light': '#a58199',
      'primary-dark': '#956b87',
      'primary-verydark': '#8d6580',
      grey: '#828282',
      'dark-grey': '#424242'
    },
    fontFamily: {
      base: '"Roboto", Helvetica, Arial, sans-serif',
      heading: '"Oswald", Helvetica, Arial, sans-serif'
    },
    extend: {
      lineHeight: {
        'verytight': '1.125'
      },
      maxHeight: {
        '100px': '100px'
      },
      padding: {
        '1.5-px': 'calc(0.375em - 1px)',
        '2.5-px': 'calc(0.625em - 1px)'
      },
      width: {
        '640px': '640px'
      }
    },
  },
  plugins: [],
}
