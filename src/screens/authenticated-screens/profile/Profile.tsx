import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@rneui/themed';
import { View } from 'react-native';
import { AuthenticatedTabsParamList } from '../../../../types/types';
import { useAppDispatch } from '../../../redux/hooks/reduxHooks';
import { logoutUser } from '../../../redux/reducers/authReducer';
import { createAlert } from '../../../utils/createAlert';

type Props = NativeStackScreenProps<AuthenticatedTabsParamList, 'Profile'>;

export const Profile = ({ navigation }: Props) => {
   const dispatch = useAppDispatch();

   const handleLogout = async () => {
      await dispatch(logoutUser());
      createAlert({ heading: '', body: 'you have been logged out' });
   };
   return (
      <View>
         <Text>profile screen</Text>
         <Button onPress={handleLogout}>Log out</Button>
      </View>
   );
};
