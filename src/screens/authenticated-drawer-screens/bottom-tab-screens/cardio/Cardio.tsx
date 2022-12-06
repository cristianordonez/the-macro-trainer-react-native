import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from '@rneui/themed';
import { View } from 'react-native';
import { BottomTabsParamList } from '../../../../../types/types';
import { useAppDispatch } from '../../../../redux/hooks/reduxHooks';

type Props = NativeStackScreenProps<BottomTabsParamList, 'Cardio'>;

export const Cardio = ({ navigation }: Props) => {
   const dispatch = useAppDispatch();

   return (
      <View>
         <Text>cardio </Text>
      </View>
   );
};
