import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export const makeOrDividerLineStyles = (colors: Colors) =>
   StyleSheet.create({
      dividerLine: {
         flex: 1,
         height: 1,
         backgroundColor: colors.divider,
      },
      formText: {
         width: 50,
         textAlign: 'center',
         paddingTop: 50,
         paddingBottom: 50,
      },
   });
