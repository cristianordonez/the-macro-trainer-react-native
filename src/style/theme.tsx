import { createTheme } from '@rneui/themed';

export const theme = createTheme({
   components: {
      Button: {
         titleStyle: {
            color: 'white',
         },
      },
      Text: {
         style: { color: 'white' },
      },
   },
   lightColors: {
      primary: '#fff',
   },
   darkColors: {
      //   primary: '#dda0dd',
      primary: '#8859b6',
      //   primary: '#14ffec',
      //   primary: '#323232',
      secondary: '',
      background: '#080C24',
   },
   mode: 'dark',
});
