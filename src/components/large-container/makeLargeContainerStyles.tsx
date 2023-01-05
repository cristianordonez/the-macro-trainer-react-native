import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export const makeLargeContainerStyles = (colors: Colors) =>
   StyleSheet.create({
      container: {
         backgroundColor: colors.searchBg,
         marginVertical: 10,
         justifyContent: 'space-between',
      },
   });
