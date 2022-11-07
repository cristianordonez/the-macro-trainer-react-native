import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export const makeCustomGroupStyles = (colors: Colors) =>
   StyleSheet.create({
      container: {
         backgroundColor: 'transparent',
         borderColor: colors.background,
      },
      buttonContainer: {
         backgroundColor: colors.grey0,
      },
   });
