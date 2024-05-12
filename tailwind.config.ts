import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    colors:{
      lightGreen: "#01B582",
      darkGreen: "#01523B",
      darkGray: "#101010",
      lightGray : "#5A5A5A",
      white: "#FFFFFF",
      black : "#000000",
    },




    fontFamily: {
      neueMachina: ["var(--font-neue-machina)"],
      powerGrotesk: ["var(--font-power-grotesk)"],
      sulphurPoint: ["var(--font-sulphur-point)"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
export default config;
