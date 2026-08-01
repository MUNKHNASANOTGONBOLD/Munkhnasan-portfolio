import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F5F3ED",
        paper2: "#EFEBE0",
        ink: "#1A1A2E",
        navy: "#1F3864",
        navy2: "#16294B",
        rule: "#C9C2B0",
        gain: "#2F6B4F",
        gold: "#B8935F",
      },
      fontFamily: {
        serif: [
          "Iowan Old Style",
          "Palatino Linotype",
          "URW Palladio L",
          "P052",
          "Georgia",
          "serif",
        ],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Consolas",
          "Liberation Mono",
          "Menlo",
          "monospace",
        ],
      },
      backgroundImage: {
        ledger:
          "repeating-linear-gradient(0deg, transparent, transparent 35px, rgba(31,56,100,0.06) 35px, rgba(31,56,100,0.06) 36px)",
      },
    },
  },
  plugins: [],
};
export default config;
