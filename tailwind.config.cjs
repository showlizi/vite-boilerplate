
module.exports = {
  // content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // content: [
  //   "./index.html",
  //   "./src/**/*.{js,ts,jsx,tsx}",
  // ],
  theme: {
    extend: {
      spacing: {
        1.5: '6px',
        2.5: '10px',
        26: '104px',
        30: '120px',
        50: '200px',
        72: '288px',
        304: '1216px',
        360: '1440px',
        400: '1600px',
        472: '1888px',
      },
      backgroundImage: {
        main: "url('./assets/bg.png') !important",
      },
      backgroundSize: {
        full: '100%',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#06F7CE',
        white: '#fff',
        333: '#333333',
        E1E1E1: '#E1E1E1',
        '00ACED': '#00ACED',
        '738BD8': '#738BD8',
        F1F1F1: '#F1F1F1C',
        '34415F': '#34415F',
        '34415F50': '#34415F50',
        '31405D': '#31405D',
        '36415A': '#36415A',
        '202A42': '#202A42',
        979797: '#979797',
        '42506E': '#42506E',
        '06F7CE': '#06F7CE',
        green: '#06F7CE',
        '505F7E': '#505F7E',
        '1B2439': '#1B2439',
        A7ADB9: '#A7ADB9',
        '1C273E': '#1C273E',
        '1C263C': '#1C263C',
        '1C273D': '#1C273D',
      },
      screens: {
        '2.5xl': '1920px',
        '2.2xl': '1600px',
        '2.4xl': '1880px',
      },
      fontFamily: {
        roboto: ['Roboto Slab'],
        Roboto: 'Roboto',
        'Roboto-Slab': 'Roboto-Slab',
        MyriadPro: 'MyriadPro',
        'MyriadPro-Regular': 'MyriadPro-Regular',
        'MyriadPro-Bold': 'MyriadPro-Bold',
        'MyriadPro-Semibold': 'MyriadPro-Semibold',
        'MyriadPro-Light': 'MyriadPro-Light',
        'MyriadPro-Italic': 'MyriadPro-Italic',
        'DINAlternate-Bold': 'DINAlternate-Bold',
      },
      fontSize: {
        'base-1': [
          '0.9375rem',
          {
            lineHeight: '1.5rem',
          },
        ],
        '2.8xl': '28px',
        '3.2xl': '32px',
      },
      zIndex: {
        0: 0,
        1: 1,
        2: 2,
      },
    },
  },
  plugins: [],
};
