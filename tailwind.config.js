module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      primary:'#030303',
      secondary:'#FFFFFF',
     
      main:'#efd3b3 ',
      mainText:'#C5C4C4'
    },
    extend: {
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
