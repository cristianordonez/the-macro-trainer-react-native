import { StyleSheet } from 'react-native';

export const ageSliderStyles = StyleSheet.create({
   container: {
      width: 50,
      height: 150,
      alignItems: 'center',
      justifyContent: 'center',
   },
   active: {
      opactiy: 1,
      fontSize: 32,
   },
   inactive: {
      opacity: 0.5,
      fontSize: 20,
   },
});
