import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export const makeHeightStyles = (colors: Colors) =>
   StyleSheet.create({
      inputRow: {
         flex: 1,
         flexDirection: 'row',
         justifyContent: 'space-evenly',
         alignItems: 'center',
      },
      outerPickerContainer: {
         flexDirection: 'row',
      },
      inputContainer: {
         width: 200,
      },
      toggleContainer: {
         width: 100,
         height: 'auto',
      },
   });
