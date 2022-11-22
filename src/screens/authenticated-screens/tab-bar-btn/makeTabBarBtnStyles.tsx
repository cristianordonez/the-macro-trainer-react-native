import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export const makeTabBarBtnStyles = (colors: Colors) =>
   StyleSheet.create({
      container: {
         position: 'absolute',
         bottom: 0,
         height: 68,
         width: 68,
         borderRadius: 68,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: colors.searchBg,
      },
      modalContainer: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: 'rgba(8, 12, 36, 0.8)',

         //    backgroundColor: colors.background,
         //  backgroundColor: 'transparent',
         //  opacity: 0.8,
         width: '100%',
         height: '100%',
      },
      modalContents: {
         backgroundColor: colors.searchBg,
         width: '80%',
         margin: 20,
         borderRadius: 20,
         padding: 35,
         shadowColor: '#000',
         alignItems: 'center',
         shadowOpacity: 0.25,
         shadowRadius: 4,
         elevation: 5,
      },
      button: {
         borderRadius: 20,
         padding: 10,
         elevation: 2,
         backgroundColor: 'red',
      },
      textStyle: {
         color: 'white',
         fontWeight: 'bold',
         textAlign: 'center',
      },
   });
