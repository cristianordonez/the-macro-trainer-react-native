import { StyleSheet } from 'react-native';

const gap = 10;

export const global = StyleSheet.create({
   flex: {
      flex: 1,
   },
   screenCenter: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
      paddingBottom: '15%',
   },
   screenEnd: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingBottom: 50,
   },
   screenEven: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      paddingHorizontal: 10,
      paddingTop: 20,
      paddingBottom: 50,
   },
   containerBorder: {
      borderRadius: 20,
   },
   containerCenter: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   screenTitle: {
      paddingTop: '20%',
   },
   textCenter: {
      textAlign: 'center',
   },
   rowCenter: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   gap: {
      paddingBottom: 10,
   },
   fullSize: {
      width: '100%',
      height: '100%',
   },
   size: {
      width: '100%',
      height: 'auto',
   },
   cardRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
   },
   cardTextContainer: {
      minWidth: '75%',
      maxWidth: '75%',
   },
   textBoldLarge: {
      fontFamily: 'Lato_Bold',
      fontWeight: 'bold',
      fontSize: 18,
      paddingBottom: 5,
   },
   textBold: {
      fontFamily: 'Lato_Bold',
      fontWeight: 'bold',
      fontSize: 16,
      paddingBottom: 5,
   },
   textXS: {
      fontSize: 10,
      fontFamily: 'Lato',
   },
   textSmall: {
      fontFamily: 'Lato',
      fontSize: 12,
   },
   textMedium: {
      fontFamily: 'Lato',
      fontSize: 16,
   },
   textLarge: {
      fontFamily: 'Lato',
      fontSize: 18,
   },
   toggleContainer: {
      width: 100,
      height: 'auto',
   },
   inputContainer: {
      width: 200,
   },
   inputRow: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '100%',
      height: '75%',
   },
   textOpacity: {
      opacity: 0.75,
   },
   customScreenContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginHorizontal: -(gap / 2),
      marginVertical: -(gap / 2),
      paddingTop: 10,
   },
   largeContainer: {
      width: '100%',
      paddingHorizontal: 10,
      paddingTop: 10,
      paddingBottom: 10,
   },
   scrollableContainer: {
      flexGrow: 1,
      justifyContent: 'space-between',
      paddingBottom: 50,
      paddingHorizontal: 10,
   },
});
