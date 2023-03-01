module.exports = {
  purge: [
    './src/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    flex: ['group-hover', 'hover', 'responsive'],
  },
  plugins: [],
}
