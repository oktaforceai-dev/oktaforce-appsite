import type {Config} from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2.25rem',
        md: '2.5rem',
        lg: '3rem',
        '2xl': '3rem'
      }
    },
    extend: {
      colors: {
        surface: 'var(--color-surface)',
        'surface-alt': 'var(--color-surface-alt)',
        foreground: 'var(--color-foreground)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
        brand: {
          DEFAULT: '#7C3AED',
          accent: '#1FB6FF',
          soft: 'rgba(124,58,237,0.12)'
        }
      },
      boxShadow: {
        sm: '0 14px 35px -18px var(--shadow-soft)',
        md: '0 18px 45px -20px var(--shadow-soft), 0 12px 32px -18px var(--shadow-strong)',
        lg: '0 32px 70px -28px var(--shadow-strong)',
        brand: '0 18px 40px -20px rgba(124,58,237,0.45)'
      },
      backgroundImage: {
        'grid-glow': 'radial-gradient(circle at center, rgba(124,58,237,0.18), transparent 55%)'
      },
      maxWidth: {
        content: '80rem'
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'system-ui', 'sans-serif'],
        display: ['var(--font-montserrat)', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
