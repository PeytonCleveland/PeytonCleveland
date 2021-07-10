module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "deep-gray": "#0d0d0d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
