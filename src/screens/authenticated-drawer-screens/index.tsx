import { createDrawerNavigator } from '@react-navigation/drawer';
import { HeaderBackButton } from '@react-navigation/elements';
import { Icon, useTheme } from '@rneui/themed';
import * as React from 'react';
import { DrawerStack } from '../../../types/types';
import { ActiveWorkout } from './active-workout/ActiveWorkout';
import { BottomTabScreen } from './bottom-tab-screens';
import { CustomDrawerContent } from './CustomDrawerContents';

const Drawer = createDrawerNavigator<DrawerStack>();

export const CustomDrawer = () => {
   const { theme } = useTheme();

   return (
      <Drawer.Navigator
         drawerContent={(props) => <CustomDrawerContent {...props} />}
         screenOptions={{
            headerShown: false,
            drawerPosition: 'right',
            swipeEnabled: false,
         }}
         initialRouteName='BottomTabScreen'
      >
         <Drawer.Screen
            options={{
               drawerLabelStyle: { display: 'none' },
            }}
            name='BottomTabScreen'
            component={BottomTabScreen}
         />
         <Drawer.Screen
            options={({ navigation: { goBack } }) => ({
               headerShown: true,
               headerStyle: {
                  backgroundColor: theme.colors.background,
               },
               headerShadowVisible: false,
               drawerItemStyle: { height: 0 },
               headerLeft: () => (
                  <HeaderBackButton
                     tintColor={theme.colors.black}
                     onPress={() => goBack()}
                  />
               ),
               headerRight: () => (
                  <Icon
                     name='x'
                     type='feather'
                     color='red'
                     onPress={() => goBack()}
                  />
               ),

               onPress: () => console.log('pressed'),
            })}
            name='ActiveWorkout'
            component={ActiveWorkout}
         />
      </Drawer.Navigator>
   );
};
