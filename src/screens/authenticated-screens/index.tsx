import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@rneui/themed';
import { AuthenticatedStackParamList } from '../../../types/types';
import { DateTitle } from '../../components/date-title/DateTitle';
import { HomeScreen } from './home-screen/HomeScreen';

const AuthenticatedStack =
   createBottomTabNavigator<AuthenticatedStackParamList>();

export const AuthenticatedStackScreen = () => {
   const { theme } = useTheme();

   //todo make settings navigator

   return (
      <AuthenticatedStack.Navigator
         screenOptions={{
            headerStyle: {
               backgroundColor: theme.colors.background,
            },
            headerTitleAlign: 'left',
            headerTintColor: theme.colors.black,
            headerShadowVisible: false,
         }}
         initialRouteName='HomeScreen'
      >
         <AuthenticatedStack.Screen
            name='Home'
            component={HomeScreen}
            options={{
               headerLeft: (props) => <DateTitle />,
               headerTitle: (props) => null,
            }}
         />
      </AuthenticatedStack.Navigator>
   );
};
