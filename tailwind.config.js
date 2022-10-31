/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // './src/**/*.{html,js}',
    // './node_modules/tw-elements/dist/js/**/*.js',
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
        move: 'move linear infinite 25s',
        reverse: 'move linear infinite reverse 20s',
      }
    },
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif'],
    },
  },
  plugins: [
    // require('tw-elements/dist/plugin'),
  ],
};
