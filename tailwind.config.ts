import { pluginTypography } from "./src/lib/tailwind";
import type { ScreensConfig } from "tailwindcss/types/config"

/** @type {import('tailwindcss').Config} */
export const screens = {
  xs: "360px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
} as const satisfies ScreensConfig

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens,
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: "#D9D9D9",
      orange: "#FF9900",
      black: "#000000",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [pluginTypography],
};
