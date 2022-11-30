import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@rneui/themed';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from '../hooks/useFonts';
import { useAppDispatch, useAppSelector } from '../redux/hooks/reduxHooks';
import {
   getAuthStatus,
   selectAuth,
   selectAuthStatus,
} from '../redux/reducers/authReducer';
import {
   getInitialFoodLogData,
   selectFoodLogStatus,
} from '../redux/reducers/foodLogReducer';
import {
   getInitialGoals,
   selectGoalsStatus,
} from '../redux/reducers/userGoalsReducer';
import {
   getInitialMetrics,
   selectMetricsStatus,
} from '../redux/reducers/userMetricsReducer';
import { global } from '../style/global.styles';
import { AuthenticatedBottomTabScreen } from './authenticated-screens/index';
import { WelcomeStackScreen } from './welcome-screens/index';
SplashScreen.preventAutoHideAsync();

export default function App() {
   const dispatch = useAppDispatch();
   const [isReady, setIsReady] = useState<boolean>(false);
   const isAuthenticated = useAppSelector(selectAuth);
   const metricsStatus = useAppSelector(selectMetricsStatus);
   const goalsStatus = useAppSelector(selectGoalsStatus);
   const foodLogStatus = useAppSelector(selectFoodLogStatus);
   const authStatus = useAppSelector(selectAuthStatus);
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
            const response = await dispatch(getAuthStatus()).unwrap();
            if (response.status === 200) {
               await dispatch(getInitialGoals());
               await dispatch(getInitialMetrics());
               await dispatch(getInitialFoodLogData());
               //now get users exercise routines
            }
         } catch (err) {
            console.error('err: ', err);
         } finally {
            setIsReady(true);
         }
      }
      prepare();
   }, []);

   const onLayoutRootView = useCallback(async () => {
      if (isReady && (authStatus === 'succeeded' || authStatus === 'failed')) {
         await SplashScreen.hideAsync();
      }
   }, [authStatus, isReady]);

   if (!isReady) {
      return null;
   } else {
      return (
         <View style={global.flex} onLayout={onLayoutRootView}>
            <SafeAreaProvider>
               <NavigationContainer theme={navTheme}>
                  {isAuthenticated &&
                  metricsStatus !== 'failed' &&
                  goalsStatus !== 'failed' &&
                  foodLogStatus !== 'failed' ? (
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
