module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    scale: {
      0: "0",
      25: ".25",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      103: "1.03",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      200: "2",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        "deep-gray": "#0d0d0d",
        "lighter-gray": "#222222",
        "hover-gray": "#2f2f2f",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
