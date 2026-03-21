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
          dim: "#3ba89f",
        },
        /* Tinted neutrals — hinted toward the charcoal-blue brand hue */
        neutral: {
          950: "#0a0a18",
          900: "#12121f",
          800: "#1e1e32",
          700: "#2a2a42",
          600: "#3d3d58",
          500: "#56566e",
          400: "#7e7e94",
          300: "#a8a8ba",
          200: "#c8c8d6",
          100: "#e4e4ec",
          50: "#f2f2f6",
        },
        /* Override default grays with teal-tinted variants */
        gray: {
          950: "#0a0a18",
          900: "#12121f",
          800: "#1e1e32",
          700: "#2a2a42",
          600: "#3d3d58",
          500: "#56566e",
          400: "#7e7e94",
          300: "#a8a8ba",
          200: "#c8c8d6",
          100: "#e4e4ec",
          50: "#f2f2f6",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.25, 1, 0.5, 1) both",
        "fade-in": "fade-in 0.5s cubic-bezier(0.25, 1, 0.5, 1) both",
      },
      transitionTimingFunction: {
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
