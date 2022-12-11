import { Avatar, useTheme } from '@rneui/themed';
import { View } from 'react-native';

import { DrawerActions, useNavigation } from '@react-navigation/native';

export const AvatarHeader = () => {
   const navigation = useNavigation();
   const { theme } = useTheme();

   return (
      <>
         <View
            style={{
               alignItems: 'center',
               justifyContent: 'center',
            }}
         >
            <Avatar
               onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
               size={36}
               rounded
               icon={{
                  name: 'user',
                  type: 'font-awesome',
                  color: theme.colors.primary,
               }}
               containerStyle={{ backgroundColor: theme.colors.searchBg }}
            />
         </View>
      </>
   );
};
