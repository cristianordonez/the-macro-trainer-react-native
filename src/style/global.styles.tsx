import { StyleSheet } from 'react-native';

export const global = StyleSheet.create({
   screenCenter: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5%',
   },
   screenEnd: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 60,
      paddingBottom: 40,
      paddingLeft: 10,
      paddingRight: 10,
   },
   arrowBack: {
      alignSelf: 'flex-start',
   },
   textCenter: {
      textAlign: 'center',
   },
});
