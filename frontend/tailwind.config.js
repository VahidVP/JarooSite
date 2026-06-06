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
        'jaroo-cyan': '#00F0FF',       // Your new electric primary
        'jaroo-cyan-dark': '#008B99',
        'jaroo-surface': '#111111',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],  // For headers
        'terminal': ['"VT323"', 'monospace'],      // For paragraphs
      },
      boxShadow: {
        // Creates a solid, blocky 3D offset instead of a soft blur
        'pixel': '8px 8px 0px 0px rgba(0, 240, 255, 0.8)',
        'pixel-hover': '4px 4px 0px 0px rgba(0, 240, 255, 1)',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}