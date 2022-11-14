import { StyleSheet } from 'react-native';

export const global = StyleSheet.create({
   screenCenter: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: '15%',
   },
   screenEnd: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 50,
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
   textBold: {
      fontFamily: 'Lato_Bold',
      fontWeight: 'bold',
      fontSize: 16,
      paddingBottom: 5,
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
});
