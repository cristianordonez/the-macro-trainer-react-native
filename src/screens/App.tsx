import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@rneui/themed';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from '../hooks/useFonts';
import { WelcomeStackScreen } from './welcome-screens/index';

SplashScreen.preventAutoHideAsync();

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
                  <WelcomeStackScreen />
               </NavigationContainer>
            </SafeAreaProvider>
         </View>
      );
   }
}
