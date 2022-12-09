import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export const makeExerciseCalcstyles = (colors: Colors) =>
   StyleSheet.create({
      container: {
         backgroundColor: colors.searchBg,
         height: 250,
         marginBottom: 10,
      },
      mainRow: {
         flexDirection: 'row',
         flex: 1,
         width: '100%',
         alignItems: 'center',
         justifyContent: 'center',
      },
      mainRowText: {
         flex: 2,
         textAlign: 'center',
      },
      weightText: {
         color: colors.primary,
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
      },
      innerRowContents: {
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center',
         height: '100%',
      },
      textError: {
         color: colors.error,
      },
   });
