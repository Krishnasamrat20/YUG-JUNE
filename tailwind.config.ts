import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'void-black':       '#050510',
        'dark-ultramarine': '#120A8F',
        'violet-nebula':    '#8A2BE2',
        'cyan-nebula':      '#00FFFF',
      },
      fontFamily: {
        outfit:  ['var(--font-outfit)', 'sans-serif'],
        manrope: ['var(--font-manrope)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)' },
          '50%':       { boxShadow: '0 0 25px rgba(0, 255, 255, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
