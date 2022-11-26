import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export const makeCustomModalStyles = (colors: Colors) =>
   StyleSheet.create({
      overlay: {
         flex: 1,
         justifyContent: 'flex-end',
         alignItems: 'center',
         backgroundColor: 'rgba(8, 12, 36, 0.9)',
         width: '100%',
         height: '100%',
      },
   });
