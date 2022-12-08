import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { DrawerStack } from '../../../types/types';
import { BottomTabScreen } from './bottom-tab-screens';
import { CustomDrawerContent } from './CustomDrawerContents';

const Drawer = createDrawerNavigator<DrawerStack>();

export const CustomDrawer = () => {
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
               headerShown: false,
               drawerLabelStyle: { display: 'none' },
            }}
            name='BottomTabScreen'
            component={BottomTabScreen}
         />
      </Drawer.Navigator>
   );
};
