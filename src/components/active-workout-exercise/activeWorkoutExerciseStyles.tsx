import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export const activeWorkoutExerciseStyles = (colors: Colors) =>
   StyleSheet.create({
      row: {
         display: 'flex',
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'space-between',
      },
      tableRow: {
         flexDirection: 'row',
      },
      dividerGap: { marginBottom: 10 },
      tableCell: {
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center',
      },
      setNumContainer: {
         height: 35,
         width: 35,
         borderRadius: 50,
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor: colors.background,
      },
   });
