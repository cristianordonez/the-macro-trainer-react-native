import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';

const gap = 10;
const itemsPerRow = 2;

export const makeHomeStyles = (colors: Colors) =>
   StyleSheet.create({
      nutritionContainer: {
         flex: 2,
         backgroundColor: colors.searchBg,
         height: '100%',
         width: '100%',
      },
      generalProgressContainer: {
         flex: 3,
         flexDirection: 'row',
         flexWrap: 'wrap',
         marginHorizontal: -(gap / 2),
         marginVertical: -(gap / 2),
         paddingTop: 10,
      },
   });
