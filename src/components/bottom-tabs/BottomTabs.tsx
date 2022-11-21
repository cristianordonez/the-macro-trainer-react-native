import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from 'react-native';
import { HomeStackParamList } from '../../../types/types';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

export const BottomTabBar = ({ navigation }: Props) => {
   const isFocused = true;
   return (
      <TouchableOpacity
         accessibilityRole='button'
         //   accessibilityState={isFocused ? { selected: true } : {}}
         //   accessibilityLabel={options.tabBarAccessibilityLabel}

         //   onPress={onPress}
         //   onLongPress={onLongPress}
         style={{ flex: 1 }}
      >
         <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>home</Text>
      </TouchableOpacity>
   );
};
