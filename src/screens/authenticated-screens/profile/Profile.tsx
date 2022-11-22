import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from '@rneui/themed';
import { View } from 'react-native';
import { AuthenticatedTabsParamList } from '../../../../types/types';

type Props = NativeStackScreenProps<AuthenticatedTabsParamList, 'Profile'>;

export const Profile = ({ navigation }: Props) => {
   return (
      <View>
         <Text>profile screen</Text>
      </View>
   );
};
