import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@rneui/themed';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from '../hooks/useFonts';
import { useAppDispatch, useAppSelector } from '../redux/hooks/reduxHooks';
import { selectAuth } from '../redux/reducers/authReducer';
import { global } from '../style/global.styles';
import { AuthenticatedBottomTabScreen } from './authenticated-screens/index';
import { WelcomeStackScreen } from './welcome-screens/index';
SplashScreen.preventAutoHideAsync();

export default function App() {
   const dispatch = useAppDispatch();
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
            //todo dispatch thunk to check if user is authenticated, and grab all necessary data if they are
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

   const authState = useAppSelector(selectAuth);

   if (!isReady) {
      return null;
   } else {
      return (
         <View style={global.flex} onLayout={onLayoutRootView}>
            <SafeAreaProvider>
               <NavigationContainer theme={navTheme}>
                  {authState.isAuthenticated ? (
                     <AuthenticatedBottomTabScreen />
                  ) : (
                     <WelcomeStackScreen />
                  )}
               </NavigationContainer>
            </SafeAreaProvider>
         </View>
      );
   }
}
