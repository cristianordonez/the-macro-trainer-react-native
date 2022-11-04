import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@rneui/themed';
import { WelcomeStackParamList } from '../../../types/types';
import { Logo } from '../../components/logo/Logo';
import { CompleteRegistration } from './complete-registration-form/CompleteRegistration';
import { Login } from './login/Login';
import { ActivityLevel } from './macro-calculator-screens/ActivityLevel';
import { Age } from './macro-calculator-screens/Age';
import { Gender } from './macro-calculator-screens/Gender';
import { Goals } from './macro-calculator-screens/Goals';
import { Height } from './macro-calculator-screens/Height';
import { Weight } from './macro-calculator-screens/Weight';
import { Main } from './main/Main';
import { Signup } from './signup/Signup';

const WelcomeStack = createStackNavigator<WelcomeStackParamList>();

export const WelcomeStackScreen = () => {
   const { theme } = useTheme();
   return (
      <WelcomeStack.Navigator
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
         initialRouteName='Main'
      >
         <WelcomeStack.Screen name='Main' component={Main} />
         <WelcomeStack.Screen name='Login' component={Login} />
         <WelcomeStack.Screen name='Signup' component={Signup} />
         <WelcomeStack.Screen name='Goals' component={Goals} />
         <WelcomeStack.Screen name='ActivityLevel' component={ActivityLevel} />
         <WelcomeStack.Screen name='Gender' component={Gender} />
         <WelcomeStack.Screen name='Age' component={Age} />
         <WelcomeStack.Screen name='Height' component={Height} />
         <WelcomeStack.Screen name='Weight' component={Weight} />
         <WelcomeStack.Screen
            name='CompleteRegistration'
            component={CompleteRegistration}
         />
      </WelcomeStack.Navigator>
   );
};
