import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#0d0e13',
        'surface-card': 'rgba(31,31,31,0.6)',
        purple: {
          DEFAULT: '#bb9eff',
          dark: '#9264f8',
          light: '#ddb7ff',
          muted: '#d1bcff',
          button: '#c494fc',
        },
        pink: {
          DEFAULT: '#ff97b4',
          soft: '#e093da',
        },
        cyan: '#9ef5ff',
        text: {
          primary: '#e3e2e5',
          bright: '#f1f5f9',
          muted: '#a8aabc',
          dim: '#988d9f',
          slate: '#94a3b8',
          dark: '#64748b',
          darker: '#727585',
        },
        border: {
          DEFAULT: 'rgba(66,71,84,0.15)',
          light: 'rgba(255,255,255,0.05)',
          medium: 'rgba(255,255,255,0.1)',
          divider: '#4d4354',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
        grotesk: ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
