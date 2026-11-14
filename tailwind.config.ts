import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Plum scale built around the brand colour #3A0F34 (plum-800)
        plum: {
          950: "#240820",
          900: "#2E0B29",
          800: "#3A0F34",
          700: "#4C1B45",
          600: "#6A3562",
        },
        // Zari gold built around the brand colour #EAAA00
        gold: {
          DEFAULT: "#EAAA00",
          400: "#F3C23A",
        },
        ink: "#F6E9F1",
        mute: "#CDB3C6",
      },
      fontFamily: {
        display: ['"Young Serif"', "Georgia", "serif"],
        sans: [
          '"Hanken Grotesk Variable"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
