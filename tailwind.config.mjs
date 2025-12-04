/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1a6091',
        'brand-black': '#0f0f0f',
        'brand-navy': '#0c1829',
        'brand-blue-light': '#e8f4fc',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
