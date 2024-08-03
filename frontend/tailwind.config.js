module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'custom-background':"url('./assets/a.jpg')",
      },
    
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

