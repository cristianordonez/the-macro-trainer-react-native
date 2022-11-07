import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export const makeCardStyles = (colors: Colors) =>
   StyleSheet.create({
      active: {
         backgroundColor: colors.searchBg,
         borderWidth: 2,
         borderColor: colors.primary,
         marginBottom: 10,
         marginHorizontal: 10,
      },
      inactive: {
         backgroundColor: colors.searchBg,
         marginBottom: 10,
         marginHorizontal: 10,
      },
      container: {
         flexDirection: 'row',
         justifyContent: 'space-around',
         alignItems: 'center',
         width: '100%',
         height: 100,
      },
   });
