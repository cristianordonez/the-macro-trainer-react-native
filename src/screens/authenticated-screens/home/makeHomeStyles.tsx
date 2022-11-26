import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';

const gap = 10;

export const makeHomeStyles = (colors: Colors) =>
   StyleSheet.create({
      nutritionContainer: {
         flex: 2,
         backgroundColor: colors.searchBg,
         height: '100%',
         width: '100%',
         alignItems: 'center',
         justifyContent: 'center',
         overflow: 'hidden',
      },
      generalProgressContainer: {
         flex: 3,
         flexDirection: 'row',
         flexWrap: 'wrap',
         marginHorizontal: -(gap / 2),
         marginVertical: -(gap / 2),
         paddingTop: 10,
      },
      tabsContainer: {
         flex: 1,
         width: '60%',
         alignItems: 'center',
         justifyContent: 'center',
         paddingTop: 10,
      },
      tabContentsContainer: {
         height: '85%',
         width: '100%',
      },
      tabViewItem: {
         width: '100%',
         alignItems: 'center',
         justifyContent: 'center',
      },
      tabItemTitle: {
         fontSize: 12,
         paddingVertical: 0,
         color: colors.black,
      },
   });
