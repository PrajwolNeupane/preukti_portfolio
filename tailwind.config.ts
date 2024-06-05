import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
      libra: ["Libre Franklin", "sans-serif"],
    },
    fontWeight: {
      eb: "800",
      b: "700",
      sb: "600",
      mb: "500",
      r: "400",
      l: "300",
    },
    fontSize: {
      "3xl": "42px",
      "2xl": "38px",
      xl: "34px",
      lg: "30px",
      md: "25px",
      rg: "22px",
      sm: "20px",
      xs: "18px",
      "2xs": "16px",
      "3xs": "14px",
    },
    colors: {
      "primary-700": "#4C0028",
      "primary-600": "#4C0028",
      "primary-500": "#4C0028",
      "dark-600": "#4C0028",
      "dark-500": "#4C0028",
      "light-500": "#E3E0D3",
      "light-400": "#DAE4EC",
    },
    extend: {
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
