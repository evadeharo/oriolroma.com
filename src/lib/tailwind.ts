import plugin from "tailwindcss/plugin";

export const pluginTypography = plugin(({ addComponents }) => {
  addComponents({
    // desktop styles
    ".text-title-xl": {
      "@apply text-[8.125rem] leading-[6.875rem] font-primary font-bold": {},
    },
    ".text-title-l": {
      "@apply text-[4.375rem] leading-[4.375rem] font-primary font-bold": {},
    },
    ".text-title-m": {
      "@apply text-[2.8125rem] leading-[3.125rem] font-primary font-bold": {},
    },
    ".text-title-s": {
        "@apply text-[2.5rem] leading-[2.5rem] font-primary font-semibold": {},
      },
    ".text-subtitle": {
      "@apply text-[1.25rem] leading-[1.4375rem] font-primary": {},
    },
    ".text-text-l": {
      "@apply text-[1rem] leading-[1.1875rem] font-primary": {},
    },
    ".text-text-m": {
      "@apply text-[0.875rem] leading-[1.0625rem] font-primary": {},
    },
  });
});
