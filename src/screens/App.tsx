import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@rneui/themed';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from '../hooks/useFonts';
import { useAppDispatch, useAppSelector } from '../redux/hooks/reduxHooks';
import { checkAuthStatus, selectAuth } from '../redux/reducers/authReducer';
import { global } from '../style/global.styles';
import { AuthenticatedBottomTabScreen } from './authenticated-screens/index';
import { WelcomeStackScreen } from './welcome-screens/index';
SplashScreen.preventAutoHideAsync();

export default function App() {
   const dispatch = useAppDispatch();
   const [isReady, setIsReady] = useState<boolean>(false);
   const authState = useAppSelector(selectAuth);
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

   //todo use this syntax to call requests for goals, food summary, and user metrics
   //   useEffect(() => {
   //      if (postStatus === 'idle') {
   //         dispatch(fetchPosts());
   //      }
   //   }, [postStatus, dispatch]);

   const authStatus = authState.status;

   useEffect(() => {
      async function prepare() {
         try {
            if (authStatus === 'idle') {
               //also make sure this is ran once at initial render
               //todo dispatch thunk to check if user is authenticated, and grab all necessary data if they are
               await dispatch(checkAuthStatus());
            }
            if (isReady === false) {
               // make sure usefonts is only ran once at initial app render
               await useFonts();
            }
         } catch (err) {
            console.log('err: ', err);
         } finally {
            setIsReady(true);
         }
      }
      prepare();
   }, [authStatus]);

   const onLayoutRootView = useCallback(async () => {
      if (isReady) {
         await SplashScreen.hideAsync();
      }
   }, [isReady]);

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
