/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['custom-font', 'sans-serif',],
        poppins: ["Poppins", "sans-serif"],
        workSans: ['"Work Sans"'],
      },
      fontSize: {
        xl: '1.25rem',
        '4.5xl':'2.625rem',
      },
      transitionDelay: {
        '2000': '2000ms',
        '2500': '2500ms',
        '3000': '3000ms',
        '3500': '3500ms',
      },
      colors: {
        'Rwhite': '#FFFFFFCC',
        'orangebrick': '#ff7607',
        'lightbrownc' : '#fae0bf98'

      },
      // that is animation class
      animation: {
        fade: 'fadeOut 5s ease-in-out',
        zoomin: 'zoom 15s',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
        zoomin: {
          '0%': {transform: theme('1,1')},
          '100%': {transform: theme('1.5,1.5')}
        }
      }),
    },
  },
  safelist: ['animate-[fade-in-right_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]'],
  plugins: [],
}