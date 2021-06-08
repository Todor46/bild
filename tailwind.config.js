module.exports = {
  mode: "jit",
  purge: ["./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          primary: "#00bcf7",
        },
        green: {
          primary: "#2ecc71",
        },
        gray: {
          primary: "#737373",
        },
      },
    },
  },
  variants: {
    extend: {
      fill: ["hover"],
    },
  },
  plugins: [],
};
