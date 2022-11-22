import { Colors } from '@rneui/themed';
import { Dimensions, StyleSheet } from 'react-native';

const gap = 10;
const itemsPerRow = 2;
const totalGapSize = (itemsPerRow - 1) * gap;
const windowWidth = Dimensions.get('window').width;
const childWidth = (windowWidth - totalGapSize) / itemsPerRow;

export const makeProgressSquareStyles = (colors: Colors) =>
   StyleSheet.create({
      container: {
         backgroundColor: colors.searchBg,
         height: childWidth - 10,
         width: childWidth - 10,
         marginVertical: gap / 2,
         marginHorizontal: gap / 2,
      },
   });
