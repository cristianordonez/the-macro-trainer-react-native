import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@rneui/themed';
import { View } from 'react-native';
import { AuthenticatedTabsParamList } from '../../../../types/types';
import { useAppDispatch } from '../../../redux/hooks/reduxHooks';
import { logoutUser } from '../../../redux/reducers/authReducer';
import { createAlert } from '../../../utils/createAlert';

type Props = NativeStackScreenProps<AuthenticatedTabsParamList, 'Cardio'>;

export const Cardio = ({ navigation }: Props) => {
   const dispatch = useAppDispatch();

   return (
      <View>
         <Text>cardio </Text>
         <Button
            onPress={() =>
               createAlert({
                  heading: 'Are you sure you want to logout?',
                  message: '',
                  btnOptions: [
                     { text: 'Cancel', style: 'destructive' },
                     {
                        text: 'Logout',
                        onPress: () => dispatch(logoutUser()),
                        style: 'default',
                     },
                  ],
               })
            }
         >
            Log out
         </Button>
      </View>
   );
};
