import { createTheme } from '@rneui/themed';

export const customTheme = createTheme({
   components: {
      Button: {
         titleStyle: {
            color: 'white',
         },
      },
      Text: {
         style: { color: 'white', fontFamily: 'Lato' },
      },
   },
   lightColors: {
      primary: 'blue',
      secondary: 'purple',
      background: '#ffffff',
   },
   darkColors: {
      primary: '#8859b6',
      secondary: '#18504C',
      background: '#080C24',
      link: '#14ffec',
   },
   mode: 'dark',
});
