import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export const makeRegistrationStyles = (colors: Colors) =>
   StyleSheet.create({
      errorMessage: {
         color: colors.error,
      },
      formContainer: {
         width: '100%',
         flex: 1,
         justifyContent: 'space-evenly',
         paddingBottom: 25,
      },
   });
