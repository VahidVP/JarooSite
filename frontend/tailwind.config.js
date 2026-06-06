/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jaroo-black': '#050505',
        'jaroo-cyan': '#00F0FF',
        'jaroo-cyan-dark': '#008B99',
        'jaroo-magenta': '#FF00FF',    // NEW: Cyberpunk Magenta
        'jaroo-yellow': '#FFEA00',     // NEW: Arcade Yellow
        'jaroo-surface': '#111111',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'terminal': ['"VT323"', 'monospace'],
      },
      boxShadow: {
        'pixel': '8px 8px 0px 0px rgba(0, 240, 255, 0.8)',
        'pixel-hover': '4px 4px 0px 0px rgba(0, 240, 255, 1)',
        'pixel-magenta': '8px 8px 0px 0px rgba(255, 0, 255, 0.8)', // NEW
        'pixel-yellow': '8px 8px 0px 0px rgba(255, 234, 0, 0.8)',  // NEW
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'glitch': 'glitch 0.2s linear infinite',
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
        }
      }
    },
  },
  plugins: [],
}