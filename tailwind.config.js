module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      'black-secondary': '#222222',
      primary: '#ECDEE4',
      secondary: '#DCECE2',
      gray: '#747474',
      'gray-light': '#F1F1F1',
      'gray-dark': '#EEEEEE',
      red: '#ff0f0f',
    },
    extend: {
      margin: {
        18: '4.5rem',
      },
      transitionDuration: {
        0: '0ms',
      },
      transitionProperty: {
        width: 'width',
      },
      zIndex: {
        '-10': '-10',
        '-1': '-1',
      },
      translate: {
        '2/5': '40%',
      },
      minHeight: {
        '92vh': '92vh',
      },
      height: {
        'screen/2': '50vh',
        '92vh': '92vh',
        '8vh': '8vh',
      },
      width: {
        'screen/2': '50%',
      },
      fontFamily: {
        sans: ['futura-pt', 'Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        floatUp: {
          '0%': {
            borderRadius: '50%',
            transform: 'translateY(100%) scale(1)',
            visibility: 'visible',
            opacity: '1',
          },
          '70%': {
            borderRadius: '50%',
          },
          '100%': {
            transform: 'translateY(0%) scale(3, 1)',
            visibility: 'visible',
            opacity: '1',
            borderRadius: '0',
          },
        },
        floatDown: {
          '0%': {
            borderRadius: '0',
            transform: 'translateY(0%) scale(3, 1)',
            visibility: 'visible',
            opacity: '1',
          },
          '30%': {
            borderRadius: '50%',
          },
          '99%': {
            transform: 'translateY(100%) scale(0)',
            visibility: 'visible',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(100%) scale(0)',
            visibility: 'hidden',
            opacity: '0',
          },
        },
      },
      animation: {
        floatUp: 'floatUp 0.8s ease-out forwards',
        floatDown: 'floatDown 0.8s ease-out forwards',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
