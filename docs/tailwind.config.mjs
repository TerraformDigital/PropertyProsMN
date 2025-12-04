/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        'brand-blue': '#1a6091',
        'brand-blue-dark': '#1f6683',
        'brand-navy': '#021623',
        'brand-black': '#0f0f0f',
        
        // Background Colors
        'bg-primary': '#f8f8f8',
        'bg-secondary': '#daddde',
        'bg-tertiary': '#021623',
        'bg-alternate': '#ffffff',
        
        // Text Colors
        'text-primary': '#021623',
        'text-secondary': '#6c6c6c',
        'text-tertiary': '#969ea3',
        
        // Border Colors
        'border-light': '#e4e4e4',
        'border-medium': '#c5c5c5',
        
        // Accent Colors
        'accent-blue': 'skyblue',
        'accent-blue-light': '#d7f3ff',
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.42', letterSpacing: '0.02em' }],
        'base': ['1rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'lg': ['1.125rem', { lineHeight: '1.5' }],
        'xl': ['1.25rem', { lineHeight: '1.4' }],
        '2xl': ['1.5rem', { lineHeight: '1.3' }],
        '3xl': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.04em' }],
        '4xl': ['2.5rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.16', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'container-sm': '40rem',
        'container-md': '64rem',
        'container-lg': '70.5rem',
        'container-xl': '80rem',
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        'fast': '200ms',
        'base': '300ms',
        'slow': '500ms',
      },
    },
  },
  plugins: [],
};
