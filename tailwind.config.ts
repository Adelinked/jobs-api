import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue1: "rgb(var(--foreground-rgb))",
        white1: "rgb(var(--background-rgb))",
        black1: "rgb(var(--black1-rgb))",
        gray1: "rgb(var(--gray1-rgb))",
        blue2: "rgb(var(--blue2-rgb))",
        gray2: "rgb(var(--gray2-rgb))",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
