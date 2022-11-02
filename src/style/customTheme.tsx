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
   lightColors: {
      primary: 'blue',
      secondary: 'purple',
      background: '#ffffff',
      link: '#14ffec',
      searchBg: '#151E34',
   },
   darkColors: {
      primary: '#8859b6',
      secondary: '#18504C',
      background: '#080C24',
      link: '#14ffec',
      searchBg: '#151E34',
   },
   mode: 'dark',
});
