module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        18: '70px',
        25: '100px'
      },
      
      fontSize: {
        '4.5xl': '42px',
        '4.75xl': '48px',
        '7.5xl': '90px'
      },

      colors: {
        dark: "#232735",
        orange: "#FE9843",
        gray_light: '#E6EDF3',
        gray_dark: '#F3F6F9',
        gray: '#848A9C',
        yellow: '#FFC107',
        green: '#1CBA6E',
        blue: '#5278FF',
      },

      zIndex: {
        '-1': '-1',
       },
       height: {
        '100': '713px'
       }
    },

    screens: {
      '2xl': {'max': '1535px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '1024px'},

      'md': {'max': '768px'},

      'sm': {'max': '640px'},

      'col': {'max': '420px'},

    },
  },

  variants: {
    extend: {
    },
  },
  plugins: [],
}
