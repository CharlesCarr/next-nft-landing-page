/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'move': {
          '0%': { transform: 'translate(100%)'},
          '100%': { transform: 'translate(-100%)'},
        }
      },
      animation: {
        move: 'move linear infinite 20s',
        reverse: 'move linear infinite reverse 15s',
      }
    },
  },
  plugins: [],
};
