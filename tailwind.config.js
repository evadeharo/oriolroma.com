/** @type {import('tailwindcss').Config} */
export const screens = {
  md: "768px",
  lg: "1024px",
  xl: "1920px",
};

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
  plugins: [],
}
