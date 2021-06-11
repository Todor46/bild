module.exports = {
  mode: "jit",
  purge: ["./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#00BCF7",
          50: "#DEF7FF",
          100: "#C4F1FF",
          200: "#91E5FF",
          300: "#5ED9FF",
          400: "#2BCCFF",
          500: "#00BCF7",
          600: "#0095C4",
          700: "#006E91",
          800: "#00485E",
          900: "#00212B",
        },
        gray: {
          800: "#322f2f",
          700: "#423e3e",
          600: "#737373",
          500: "#8a8888",
          400: "#aeadad",
          300: "#a5a5a5",
          200: "#dadada",
          100: "#efefef",
        },
        green: {
          DEFAULT: "#2ECC71",
          50: "#E6F9EE",
          100: "#D1F5E0",
          200: "#A8EBC4",
          300: "#7EE2A8",
          400: "#54D98C",
          500: "#2ECC71",
          600: "#25A25A",
          700: "#1B7943",
          800: "#124F2C",
          900: "#082615",
        },
      },
      screens: {
        lg: "940px",
      },
      outline: {
        DEFAULT: ["1px #000000 auto"],
      },
    },
  },
  variants: {
    extend: {
      outline: ["focus-visible"],
      fill: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
