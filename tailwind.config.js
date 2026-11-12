/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: '#080B18',
          dark: '#0B1020',
          card: '#0E162B',
          surface: '#131D38',
          border: '#1E2B4D',
        },
        electric: {
          purple: '#8B5CF6',
          cyan: '#22D3EE',
          indigo: '#6366F1',
          teal: '#14B8A6',
        },
        brand: {
          white: '#F8FAFC',
          muted: '#94A3B8',
          darkmuted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-cyan': 'glowCyan 3s ease-in-out infinite alternate',
        'glow-purple': 'glowPurple 3s ease-in-out infinite alternate',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowCyan: {
          '0%': { boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(34, 211, 238, 0.5)' },
        },
        glowPurple: {
          '0%': { boxShadow: '0 0 15px rgba(139, 92, 246, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, rgba(34, 211, 238, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(34, 211, 238, 0.05) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
