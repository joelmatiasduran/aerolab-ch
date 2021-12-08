module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx', './public/**/*.html'], //add this line
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../assets/header-x1.png')",
      },
      colors: {
        'aero-blue': '#18dcfc',
      },
      //rgba(110,232,255,255)
      //#6ee8ff
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
