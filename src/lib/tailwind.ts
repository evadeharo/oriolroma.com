import plugin from "tailwindcss/plugin"

export const pluginTypography = plugin(({ addComponents }) => {
  addComponents({
    // desktop styles
    ".text-header-xxl-desktop": {
      "@apply text-[5rem] leading-[5rem] font-bold": {}
    },

    // mobile styles
    ".text-header-xxl": {
      "@apply text-[2.25rem] leading-[2.25rem] font-bold": {}
    },
  })
})