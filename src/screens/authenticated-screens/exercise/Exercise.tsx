import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from '@rneui/themed';
import { View } from 'react-native';
import { AuthenticatedTabsParamList } from '../../../../types/types';

type Props = NativeStackScreenProps<AuthenticatedTabsParamList, 'Exercise'>;

export const Exercise = ({ navigation }: Props) => {
   return (
      <View>
         <Text>exercise screen</Text>
      </View>
   );
};
