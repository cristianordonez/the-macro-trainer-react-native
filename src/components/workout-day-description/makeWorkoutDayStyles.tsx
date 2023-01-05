import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export const makeWorkoutDayStyles = (colors: Colors) =>
   StyleSheet.create({
      dayText: { paddingBottom: 10 },
      exerciseRowContainer: {
         width: '100%',
         flexDirection: 'row',
      },
      exerciseNameContainer: {
         flex: 1,
      },
      setsContainer: {
         flex: 5,
         alignSelf: 'flex-start',
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'space-evenly',
      },
   });
