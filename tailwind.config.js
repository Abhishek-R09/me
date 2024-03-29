/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xsm: '480px',
        ...defaultTheme.screens,
      },
      spacing: {
        // ...defaultTheme.theme.inset,
        176: '176px',
        352: '352px',
      },
      inset: {
        176: '176px',
        352: '352px',
      },
    },
  },
  plugins: [],
}
