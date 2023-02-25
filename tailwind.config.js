const colors = require('tailwindcss/colors');
const pSBC = require('shade-blend-color').default;

const primary = '#9a728d';
const grey = '#828282';

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
      primary: {
        950: pSBC(0.05, primary),
        DEFAULT: primary,
        1025: pSBC(-0.025, primary),
        1050: pSBC(-0.05, primary)
      },
      grey: {
        600: pSBC(-0.4, grey),
        DEFAULT: grey,
        1250: pSBC(-0.25, grey)
      }
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
