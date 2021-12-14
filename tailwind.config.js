module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx', './public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../assets/header-x1.png')",
      },
      colors: {
        'aero-blue': '#18dcfc',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
