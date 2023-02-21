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
        'black' : '#212121' ,
        'purple' : '#ba68c8' ,
      }
    },
  },
  plugins: [],
}
