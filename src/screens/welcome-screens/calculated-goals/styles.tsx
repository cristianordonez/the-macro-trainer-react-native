import { StyleSheet } from 'react-native';

export const calculatedGoalsStyles = StyleSheet.create({
   goalWeights: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-evenly',
   },
   weightCol: {
      alignItems: 'flex-start',
   },
   textWeight: {
      alignSelf: 'flex-start',
      fontFamily: 'Lato_Italic',
      opacity: 0.8,
   },
   textTitle: { alignSelf: 'flex-start' },
});
