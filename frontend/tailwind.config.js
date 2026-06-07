/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jaroo-black': '#000000',
        'jaroo-surface': '#0a0a0a',
        'jaroo-panel': '#141414',
        'jaroo-cyan': '#00F0FF',
        'jaroo-cyan-dark': '#008B99',
        'jaroo-crimson': '#FF003C',
        'jaroo-magenta': '#FF00FF',
        'jaroo-red': '#D95C45',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'terminal': ['"VT323"', 'monospace'],
      },
      boxShadow: {
        'pixel': '8px 8px 0px 0px rgba(0, 240, 255, 0.3)',
        'pixel-hover': '4px 4px 0px 0px rgba(0, 240, 255, 0.8)',
        'pixel-crimson': '8px 8px 0px 0px rgba(255, 0, 60, 0.5)',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'glitch': 'glitch 0.2s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite', 
        'spin-slow': 'spin 15s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 1px)' },
          '40%': { transform: 'translate(-1px, -1px)' },
          '60%': { transform: 'translate(2px, 1px)' },
          '80%': { transform: 'translate(1px, -1px)' },
          '100%': { transform: 'translate(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        marquee: {
          /* Translates exactly 100% of its own width for a perfect loop */
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }, 
        }
      }
    },
  },
  plugins: [],
}