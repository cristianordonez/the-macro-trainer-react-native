import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { Button, View } from 'react-native';
import { AuthenticatedBottomTabScreen } from '../authenticated-screens';

function HomeScreen({ navigation }: any) {
   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Button
            onPress={() => navigation.navigate('Notifications')}
            title='Go to notifications'
         />
      </View>
   );
}

function NotificationsScreen({ navigation }: any) {
   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Button onPress={() => navigation.goBack()} title='Go back home' />
      </View>
   );
}

const Drawer = createDrawerNavigator();

export const CustomDrawer = () => {
   return (
      <Drawer.Navigator
         screenOptions={{ headerShown: false }}
         initialRouteName='AuthenticatedBottomTabScreen'
      >
         <Drawer.Screen
            name='AuthenticatedBottomTabScreen'
            component={AuthenticatedBottomTabScreen}
         />
         <Drawer.Screen name='Notifications' component={NotificationsScreen} />
      </Drawer.Navigator>
   );
};
