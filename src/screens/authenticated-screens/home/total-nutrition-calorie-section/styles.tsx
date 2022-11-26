import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   outercontainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
   },
   circularProgressContainer: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
   },
   linearProgressContainer: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
   },
   linearProgress: {
      height: 10,
      width: '75%',
   },
   linearProgressText: {
      textAlign: 'left',
      width: '75%',
   },
   linearProgressSubtitle: {
      paddingTop: 5,
   },
});
