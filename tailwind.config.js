/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '4xl': '-15px 15px 0px 0px',
      },
      keyframes: {
        'move': {
          '0%': { transform: 'translate(100%)'},
          '100%': { transform: 'translate(-100%)'},
        }
      },
      animation: {
        move: 'move linear infinite 25s',
        reverse: 'move linear infinite reverse 20s',
        'spin-slow': 'spin 3s linear infinite',
      }
    },
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif'],
    },
  },
  plugins: [

  ],
};
