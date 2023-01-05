import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export const makeExerciseCalcstyles = (colors: Colors) =>
   StyleSheet.create({
      mainRow: {
         flexDirection: 'row',
         flex: 1,
         width: '100%',
         alignItems: 'center',
         justifyContent: 'center',
         paddingHorizontal: 20,
      },
      mainRowText: {
         flex: 2,
         textAlign: 'left',
      },
      weightText: {
         color: colors.primary,
         textAlign: 'right',
      },
      inputContainer: {
         flex: 1,
      },
      calculateContents: {
         flex: 2,
      },
      calculateHeader: {
         alignSelf: 'center',
      },
      innerRow: {
         flex: 1,
         flexDirection: 'row',
         width: '100%',
         alignItems: 'center',
         justifyContent: 'center',
         paddingHorizontal: 35,
      },
      innerRowContents: {
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center',
         height: '100%',
      },
      innerRowText: {
         alignSelf: 'flex-start',
      },
      textError: {
         color: colors.error,
      },
   });
