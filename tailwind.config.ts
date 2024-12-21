import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          900: '#EBDDFF',
          800: '#D3BBFF',
          700: '#BC99FF',
          600: '#A478F7',
          500: '#895EDB',
          400: '#6F43C0',
          300: '#5727A6',
          200: '#3F008D',
          100: '#250059',
        },
        neutral: {
          full: '#FFFFFF',
          900: '#F1F5F9',
          800: '#E2E8F0',
          700: '#CBD5E1',
          600: '#94A3B8',
          500: '#64748B',
          400: '#475569',
          300: '#334155',
          200: '#1E293B',
          100: '#0F172A',
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
