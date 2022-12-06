import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export const makeAddBtnModalStyles = (colors: Colors) =>
   StyleSheet.create({
      container: {
         position: 'absolute',
         bottom: 0,
         height: 68,
         width: 68,
         borderRadius: 68,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: colors.searchBg,
      },
      modalContents: {
         height: '35%',
         width: '100%',
         backgroundColor: colors.searchBg,
         borderTopLeftRadius: 25,
         borderTopRightRadius: 25,
         paddingTop: 20,
         paddingBottom: '10%',
         justifyContent: 'space-between',
      },
      headerRow: {
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'space-between',
         paddingHorizontal: 10,
      },
      modalRowPressed: {
         backgroundColor: colors.background,
         padding: 10,
      },
      modalRowNotPressed: {
         backgroundColor: colors.searchBg,
         padding: 10,
      },
      modalRow: {
         flexDirection: 'row',
         alignItems: 'center',
      },
      iconStyle: {
         alignSelf: 'flex-end',
         paddingRight: 10,
      },
   });
