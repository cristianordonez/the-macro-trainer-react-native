import { StyleSheet } from 'react-native';

export const loadingImageStyles = StyleSheet.create({
   imageContainer: {
      height: 175,
      width: 350,
      flex: 3,
      justifyContent: 'flex-end',
   },
   image: {
      width: '100%',
      height: undefined,
      aspectRatio: 1,
   },
});
