import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from '@rneui/themed';
import { View } from 'react-native';
import { AuthenticatedTabsParamList } from '../../../../types/types';

type Props = NativeStackScreenProps<
   AuthenticatedTabsParamList,
   'WeightLifting'
>;

const sampleData = {
   programName: 'nSuns 531 LP 4 day version',
};

export const WeightLifting = ({ navigation }: Props) => {
   return (
      <View>
         <Text>weight lifting screen</Text>
      </View>
   );
};
