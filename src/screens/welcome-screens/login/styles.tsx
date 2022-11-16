import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export const makeLoginStyles = (colors: Colors) =>
   StyleSheet.create({
      heading: {
         flex: 1,
         width: '100%',
         alignItems: 'center',
         justifyContent: 'center',
      },
      headingText: {
         paddingTop: 10,
      },
      form: {
         flex: 3,
         width: '100%',
         paddingBottom: 50,
         justifyContent: 'space-evenly',
      },
      navigationText: {
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'center',
      },
      link: {
         paddingLeft: 5,
      },
      formText: {
         width: 50,
         textAlign: 'center',
         paddingTop: 50,
         paddingBottom: 50,
      },
      textLink: {
         color: colors.link,
      },
      textRight: {
         textAlign: 'right',
      },
      dividerLine: {
         flex: 1,
         height: 1,
         backgroundColor: colors.divider,
      },
   });
