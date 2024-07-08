/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        imgRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        imgRotate: 'imgRotate 50s linear infinite',
      },
    },
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.after-line': {
        position: 'relative',
      },
      '.after-line::after': {
        content: '""',
        position: 'absolute',
        // top: '50%',
        // left: '100%',
        // transform: 'translateY(-50%)',
        width: '60px',
        height: '2px',
        backgroundColor: '#FEA116',
        marginLeft: '10px',
      },
    }, ['responsive', 'hover']);
  },],
}