module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "poppins": ["Poppins", "sans-serif"],
      "open-sans": ["Open Sans", "sans-serif"]
    },
    extend: {
      backgroundImage: theme => ({
        "risto": "url(/img/risto.jpg)"
      })
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
