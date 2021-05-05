module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    colors: {
      cadet: {
        DEFAULT: "#3A3B59",
        dark: "#28293D",
        light: "#5B5E8C",
        lighter: "#7A7FBD",
      },
      bluegreen: {
        DEFAULT: "#75BFC0",
        light: "#80D6D9",
        lighter: "#ADE4E6",
      },
      orange: {
        DEFAULT: "#F34837",
        dark: "#E04233",
        light: "#F3B5AF",
      },
      gold: {
        DEFAULT: "#F1C388",
        light: "#F1D4B0",
        lighter: "#F1E2CF",
      },
      white: "#F6F6F6",
      lightergray: "#C2C2C2",
      lightgray: "#595959",
      gray: "#292925",
      black: "#1D1D1B",
    },
    fontFamily: {
      sans: ["Trebuchet", "sans-serif"],
      primary: ["Trebuchet", "sans-serif"],
      secondary: ["AirbnbCereal", "Arial"],
    },
    fill: () => ({
      cadet: "#3A3B59",
      white: "#F6F6F6",
    }),
    stroke: () => ({
      cadet: "#3A3B59",
      white: "#F6F6F6",
    }),
    extend: {
      maxWidth: {
        "screen-3xl": "2000px",
      },
      zIndex: {
        "-1": "-1",
      },
      fontSize: {
        "6xl": ["3.75rem", "5rem"],
        "3xl": ["1.875rem", "3rem"],
      },
      letterSpacing: {
        brand: "3px",
      },
      boxShadow: {
        "sm-dark": "0 0px 6px 0 rgba(127, 127, 189, 0.15)",
        "sm-light": "0 0px 6px 0 rgba(40, 41, 46, 0.1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
