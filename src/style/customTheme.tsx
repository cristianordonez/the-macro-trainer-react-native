import { createTheme } from '@rneui/themed';

export const customTheme = createTheme({
   components: {
      Button: {
         containerStyle: {
            width: '100%',
         },
      },
      Text: {
         style: { fontFamily: 'Lato' },
      },
   },
   // lightColors: {
   //    primary: 'blue',
   //    secondary: 'purple',
   //    background: '#ffffff',
   //    link: '#14ffec',
   //    searchBg: '#151E34',
   //    grey0: '#292d3e',
   // },
   darkColors: {
      primary: '#8859b6',
      secondary: '#009DB8',
      tertiary: '#EEA25E',
      background: '#080C24',
      searchBg: '#151E34',
      link: '#14ffec',
      grey0: '#292d3e',
   },
   mode: 'dark',
});
