module.exports = {
  mode: 'jit',
  purge: ['./client/**/*.html', './client/**/*.tsx', './client/src/*.tsx'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald'],
        // sans: ['Montserrat'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
