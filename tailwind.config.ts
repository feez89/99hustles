import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Brand monochrome palette ──────────────────────────────────────
        'brand-black':  '#0A0A0A',
        'brand-dark':   '#111111',
        'brand-card':   '#161616',
        'brand-subtle': '#1C1C1C',
        'brand-white':  '#FFFFFF',
        'brand-off':    '#FAFAFA',
        'brand-cream':  '#F5F5F5',
        'brand-border': '#E5E5E5',
        'brand-border-dark': 'rgba(255,255,255,0.10)',
        // ── Gray scale ───────────────────────────────────────────────────
        'gray-750': '#2A2A2A',
      },
      fontFamily: {
        sans:    ['var(--font-inter)',         'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3rem',    { lineHeight: '1.05',  letterSpacing: '-0.02em'  }],
        '6xl': ['3.75rem', { lineHeight: '1.02',  letterSpacing: '-0.025em' }],
        '7xl': ['4.5rem',  { lineHeight: '1.00',  letterSpacing: '-0.03em'  }],
        '8xl': ['6rem',    { lineHeight: '0.97',  letterSpacing: '-0.035em' }],
      },
      boxShadow: {
        'card':       '0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.05)',
        'card-hover': '0 2px 8px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.10)',
        'inset-top':  'inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      animation: {
        'fade-up': 'fadeUp 0.45s ease-out',
        'fade-in': 'fadeIn 0.35s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)'    },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
