import * as Font from 'expo-font';

export const useFonts = async () => {
   await Font.loadAsync({
      Lato: require('../../assets/fonts/Lato-Regular.ttf'),
      Lato_Bold: require('../../assets/fonts/Lato-Bold.ttf'),
   });
};
