module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        red: { 500: "#ff472f", 700: "#d3331e", A700: "#eb0000" },
        deep_purple: {
          500: "#6d28d9",
          "500_19": "#6d28d919",
          "500_6c": "#6d28d96c",
          "500_67": "#6d28d967",
          "500_26": "#6d28d926",
        },
        light_blue: { 500: "#00acee" },
        white: {
          A700_33: "#ffffff33",
          A700_4c: "#ffffff4c",
          A700_0c: "#ffffff0c",
          A700: "#ffffff",
        },
        black: {
          900: "#050121",
          "900_01": "#000000",
          "900_19": "#05012119",
          "900_59": "#00000059",
        },
        gray: {
          500: "#999999",
          600: "#838383",
          900: "#0c072b",
          "900_bf": "#0b072abf",
          "900_66": "#0c072b66",
          "500_75": "#a5a5a575",
        },
        blue_gray: { 100: "#d9d9d9" },
        orange: { 100: "#ebd5a5" },
        indigo: { 900: "#002490" },
      },
      fontFamily: { josefinsans: "Josefin Sans", metropolis: "Metropolis" },
      boxShadow: { bs: "0px 5px  40px 0px #6d28d9" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
