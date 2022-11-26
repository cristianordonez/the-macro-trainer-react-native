import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export const makeCustomGroupStyles = (colors: Colors) =>
   StyleSheet.create({
      container: {
         backgroundColor: 'transparent',
         borderColor: colors.background,
         borderRadius: 25,
         height: 25,
      },
      buttonContainer: {
         backgroundColor: colors.grey0,
      },
   });
