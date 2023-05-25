/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      'sm' : '320px' ,
      'md' : '567px' ,
      'lg' : '800px' ,
      'xl' : '1049px' ,
      '2xl' : '1200px ,'
    },
    extend: {
      colors:{
        'mainColor' : '#f3e5f5' ,
        'primaryColor' : '#2979ff' ,
        'dark' : '#212121' ,
        'purple' : '#ba68c8' ,
      } ,
      boxShadow: {
        'neu-field-lg' : '5px 5px 11px #e4d7e6, -5px -5px 11px #fff3ff;' ,
        'neu-field' : '1px 1px 6px #e4d7e6, -1px -1px 6px #fff3ff' ,
        'neu-disk' : '0px 1px 64px 2px rgba(0, 0, 0, 0.41)'
      }
    },
  },
  plugins: [],
}
