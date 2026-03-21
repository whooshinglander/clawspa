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
        charcoal: {
          DEFAULT: "#1a1a2e",
          light: "#16213e",
          dark: "#0f0f23",
        },
        teal: {
          DEFAULT: "#4ecdc4",
        },
      },
    },
  },
  plugins: [],
};
export default config;
