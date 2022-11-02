import { registerCustomIconType } from '@rneui/base';
import * as Font from 'expo-font';
import { Icon } from '../icon/CustomIcon';

export const useFonts = async () => {
   await Font.loadAsync({
      Lato: require('../../assets/fonts/Lato-Regular.ttf'),
      Lato_Bold: require('../../assets/fonts/Lato-Bold.ttf'),
      Fontello: require('../../assets/fonts/fontello.ttf'),
   });
   registerCustomIconType('fontello', Icon);
};
