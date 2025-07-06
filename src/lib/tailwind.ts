import plugin from "tailwindcss/plugin";

export const pluginTypography = plugin(({ addComponents }) => {
  addComponents({
    // desktop styles
    ".text-title-xl": {
      "@apply text-[5rem] leading-[5rem] font-bold": {},
    },
    ".text-title-l": {
      "@apply text-[5rem] leading-[5rem] font-bold": {},
    },
    ".text-title-m": {
      "@apply text-[5rem] leading-[5rem] font-bold": {},
    },
    ".text-subtitle": {
      "@apply text-[5rem] leading-[5rem] font-bold": {},
    },
    ".text-text-l": {
      "@apply text-[5rem] leading-[5rem] font-bold": {},
    },
    ".text-text-m": {
      "@apply text-[5rem] leading-[5rem] font-bold": {},
    },
  });
});
