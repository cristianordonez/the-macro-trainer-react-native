import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export const makeMacroNurientStyles = (colors: Colors) =>
   StyleSheet.create({
      row: {
         width: '100%',
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'center',
         paddingHorizontal: '20%',
      },
      icon: {
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center',
      },
      textContainer: {
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center',
      },
      macroTitle: {
         opacity: 0.75,
         paddingBottom: 5,
      },
      text: {
         alignSelf: 'flex-start',
      },
   });
