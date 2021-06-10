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
          dark: "#8a8888",
          light: "#aeadad",
          25: "#efefef",
        },
      },
      screens: {
        lg: "940px",
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
