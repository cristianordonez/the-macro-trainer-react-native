import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
   headingContainer: {
      flex: 1,
      paddingTop: 10,
      paddingBottom: 10,
      // alignContent: 'center',
      // justifyContent: 'space-between',
   },
   btnContainer: {
      flex: 1,
      width: '100%',
   },
   headingText: {
      paddingBottom: 50,
   },
   imageContainer: {
      height: 175,
      width: 350,
      flex: 2,
   },
   image: {
      width: '100%',
      height: undefined,
      aspectRatio: 1,
   },
});
