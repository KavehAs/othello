/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '567px',
      'lg': '800px',
      'xl': '1049px',
      '2xl': '1200px ,'
    },
    extend: {
      colors: {
        'mainColor': '#f3e5f5',
        'primaryColor': '#2979ff',
        'dark': '#212121',
        'purple': '#ba68c8',
      },
      boxShadow: {
        'neu-field-lg': '5px 5px 11px #e4d7e6, -5px -5px 11px #fff3ff;',
        'neu-field': '1px 1px 6px #e4d7e6, -1px -1px 6px #fff3ff',
        'neu-disk': '0px 1px 64px 2px rgba(0, 0, 0, 0.41)' ,
        'neu-ground' : 'inset 5px 5px 14px #cfc3d0, inset -5px -5px 14px #ffffff;'
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(0, 1fr))',
      } ,
      keyframes: {
        myTurn : {
          '40%' : {
            '-webkit-box-shadow': '0px 0px 1px 4px #2979ff' ,
            'box-shadow': '0px 0px 1px 4px #2979ff'
          } ,
          '0%, 100%' : {
            '-webkit-box-shadow': '0px 0px 2px 1px #2979ff',
            'box-shadow': '0px 0px 2px 1px #2979ff'
          }
        }
      } ,
      animation : {
        playerTurn : 'myTurn 2s linear infinite normal forwards'
      }
    },
  },
  plugins: [],
}
