import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export const makeHeightStyles = (colors: Colors) =>
   StyleSheet.create({
      outerPickerContainer: {
         flexDirection: 'row',
      },
   });
