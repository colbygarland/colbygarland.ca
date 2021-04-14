module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0cd07e',
        copy: '#333',
      },
      fontFamily: {
        header: ['Abril Fatface'],
        body: ['Roboto'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
