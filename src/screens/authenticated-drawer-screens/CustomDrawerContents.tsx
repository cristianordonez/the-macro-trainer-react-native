import {
   DrawerContentScrollView,
   DrawerItem,
   DrawerItemList,
} from '@react-navigation/drawer';
import { View } from 'react-native';
import { useAppDispatch } from '../../redux/hooks/reduxHooks';
import { logoutUser } from '../../redux/reducers/authReducer';

export const CustomDrawerContent = (props: any) => {
   const dispatch = useAppDispatch();
   return (
      <DrawerContentScrollView {...props}>
         <DrawerItemList {...props} />
         <View>
            <DrawerItem
               label='Log out'
               onPress={() => dispatch(logoutUser())}
            />
         </View>
      </DrawerContentScrollView>
   );
};
