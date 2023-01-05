import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export const makeWorkoutDayStyles = (colors: Colors) =>
   StyleSheet.create({
      titleRow: {
         flexDirection: 'row',
         justifyContent: 'space-between',
      },
      dividerStyle: {
         alignSelf: 'stretch',
         marginVertical: 5,
      },
      rowsContainer: {
         flex: 1,
         alignItems: 'center',
         justifyContent: 'space-evenly',
      },
      row: {
         flex: 1,
         flexDirection: 'row',
         marginVertical: 5,
      },
      column: {
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center',
      },
   });
