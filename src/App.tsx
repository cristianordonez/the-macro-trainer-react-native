import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from '@rneui/themed';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GetStarted } from './screens/get-started/GetStarted';
import { Home } from './screens/home/Home';
import { Login } from './screens/login/Login';
import { Signup } from './screens/sign-up/SignUp';
import { theme } from './style/theme';

const navTheme = {
   dark: true,
   colors: {
      primary: '#173735',
      background: 'transparent',
      card: '#173735',
      text: '#ffffff',
      border: '#173735',
      notification: '#173735',
   },
};

const Stack = createStackNavigator();

export default function App() {
   return (
      <SafeAreaProvider>
         <ThemeProvider theme={theme}>
            <NavigationContainer theme={navTheme}>
               <Stack.Navigator
                  screenOptions={{
                     headerShown: false,
                     cardStyle: {
                        backgroundColor: '#080C24',
                        opacity: 1,
                     },
                  }}
               >
                  <Stack.Screen name='Home' component={Home} />
                  <Stack.Screen name='GetStarted' component={GetStarted} />
                  <Stack.Screen name='Login' component={Login} />
                  <Stack.Screen name='Signup' component={Signup} />
               </Stack.Navigator>
            </NavigationContainer>
         </ThemeProvider>
      </SafeAreaProvider>
   );
}
