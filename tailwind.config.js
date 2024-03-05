module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    screens: {
      md: { max: "767px" },
    },
    fontFamily: {
      junge: ["Junge", "sans-serif"],
      quicksand: ["Quicksand", "sans-serif"]
    },
    colors: {
      start: "#1a87c5",
      mid: "#055aae",
      end: "#020024",
      primary: "#ffffff",
      secondary: "#bfbfbf",
      error: "#ff6464",
    },
    boxShadow: {
      custom: "0 0 10px #bfbfbf",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
