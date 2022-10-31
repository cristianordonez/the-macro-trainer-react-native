import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearProgress, useTheme } from '@rneui/themed';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Logo } from './components/logo/Logo';
import { useFonts } from './hooks/useFonts';
import { Home } from './screens/home/Home';
import { Login } from './screens/login/Login';
import { MacroCalculator } from './screens/macro-calculator/index';
import { Signup } from './screens/signup/Signup';

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

export default function App() {
   const [isReady, setIsReady] = useState<boolean>(false);
   const { theme } = useTheme();

   const navTheme = {
      dark: true,
      colors: {
         primary: '#173735',
         background: theme.colors.background,
         card: theme.colors.background,
         text: theme.colors.black,
         border: theme.colors.divider,
         notification: '#173735',
      },
   };

   useEffect(() => {
      //loads fonts and all data before app is shown to users
      async function prepare() {
         try {
            await useFonts();
         } catch (err) {
            console.log('err: ', err);
         } finally {
            setIsReady(true);
         }
      }
      prepare();
   }, []);

   const onLayoutRootView = useCallback(async () => {
      if (isReady) {
         await SplashScreen.hideAsync();
      }
   }, [isReady]);

   if (!isReady) {
      return null;
   } else {
      return (
         <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <SafeAreaProvider>
               <NavigationContainer theme={navTheme}>
                  <Stack.Navigator
                     screenOptions={{
                        headerTitle: (props) => <Logo />,
                        headerBackTitleVisible: false,
                        headerTitleContainerStyle: {},
                        headerStyle: {
                           backgroundColor: theme.colors.background,
                        },
                        headerTitleAlign: 'center',
                        headerTintColor: theme.colors.black,
                        headerShadowVisible: false,
                        cardStyle: {
                           backgroundColor: '#080C24',
                           opacity: 1,
                        },
                     }}
                     initialRouteName='Home'
                  >
                     <Stack.Screen name='Home' component={Home} />
                     <Stack.Screen name='Login' component={Login} />
                     <Stack.Screen
                        options={{
                           headerTitle: (props) => (
                              <LinearProgress
                                 value={10}
                                 variant='determinate'
                              />
                           ),
                        }}
                        name='Signup'
                        component={Signup}
                     />
                     <Stack.Screen
                        name='MacroCalculator'
                        component={MacroCalculator}
                     />
                  </Stack.Navigator>
               </NavigationContainer>
            </SafeAreaProvider>
         </View>
      );
   }
}
