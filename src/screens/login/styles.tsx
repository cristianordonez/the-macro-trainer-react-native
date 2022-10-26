import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
   heading: {
      flex: 2,
      width: '100%',
   },
   form: {
      flex: 3,
      width: '100%',
      justifyContent: 'space-between',
   },
   buttonTextContainer: {
      flex: 1,
      justifyContent: 'space-evenly',
   },
   navigationText: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
   },
   link: {
      paddingLeft: 5,
   },
});
