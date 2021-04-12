module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        primary: "#0cd07e",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
