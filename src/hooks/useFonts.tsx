import * as Font from 'expo-font';

export const useFonts = async () => {
   await Font.loadAsync({
      Lato: require('../../assets/fonts/Lato-Regular.ttf'),
   });
};
