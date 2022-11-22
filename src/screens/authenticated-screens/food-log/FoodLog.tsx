import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from '@rneui/themed';
import { View } from 'react-native';
import { AuthenticatedTabsParamList } from '../../../../types/types';

type Props = NativeStackScreenProps<AuthenticatedTabsParamList, 'FoodLog'>;

export const FoodLog = ({ navigation }: Props) => {
   return (
      <View>
         <Text>diary screen</Text>
      </View>
   );
};
