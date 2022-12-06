import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from '@rneui/themed';
import { View } from 'react-native';
import { BottomTabsParamList } from '../../../../../types/types';

type Props = NativeStackScreenProps<BottomTabsParamList, 'FoodLog'>;

export const FoodLog = ({ navigation }: Props) => {
   return (
      <View>
         <Text>diary screen</Text>
      </View>
   );
};
