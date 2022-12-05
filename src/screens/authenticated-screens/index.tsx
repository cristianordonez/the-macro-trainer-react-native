import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, useTheme } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';
import { AuthenticatedTabsParamList } from '../../../types/types';
import { DateTitle } from '../../components/date-title/DateTitle';
import { AvatarHeader } from '../../components/header-avatar/HeaderAvatar';
import { AddBtnModal } from './add-btn-modal/AddBtnModal';
import { Cardio } from './cardio/Cardio';
import { FoodLog } from './food-log/FoodLog';
import { Home } from './home/Home';
import { WeightLifting } from './weight-lifting/WeightLifting';

const AuthenticatedTabs =
   createBottomTabNavigator<AuthenticatedTabsParamList>();

export const AuthenticatedBottomTabScreen = () => {
   const { theme } = useTheme();

   return (
      <AuthenticatedTabs.Navigator
         screenOptions={{
            headerStyle: {
               backgroundColor: theme.colors.background,
            },
            headerRight: (navigation) => <AvatarHeader />,
            headerTintColor: theme.colors.black,
            headerShadowVisible: false,
            tabBarActiveTintColor: theme.colors.primary,
            tabBarStyle: {
               backgroundColor: theme.colors.searchBg,
               borderTopWidth: 0,
               elevation: 0,
            },
         }}
         initialRouteName='Home'
      >
         <AuthenticatedTabs.Screen
            name='Home'
            component={Home}
            options={{
               headerTitle: (props) => <DateTitle />,
               tabBarIcon: ({ color }: { color: string }) => (
                  <Icon color={color} name='home' type='feather' />
               ),
            }}
         />
         <AuthenticatedTabs.Screen
            name='FoodLog'
            component={FoodLog}
            options={{
               tabBarLabel: 'Food Log',
               headerTitle: (props) => <DateTitle />,
               tabBarIcon: ({ color }: { color: string }) => (
                  <Icon color={color} name='book-open' type='feather' />
               ),
            }}
         />
         <AuthenticatedTabs.Screen
            name='Add'
            component={AddBtnModal}
            listeners={{
               tabPress: (e) => {
                  e.preventDefault();
               },
            }}
            options={{
               tabBarLabel: '',
               tabBarButton: (props) => <TouchableOpacity {...props} />,
               tabBarIcon: ({ color }) => <AddBtnModal />,
            }}
         />
         <AuthenticatedTabs.Screen
            name='WeightLifting'
            component={WeightLifting}
            options={{
               tabBarLabel: 'Weight Lifting',
               headerTitle: (props) => <DateTitle />,
               tabBarIcon: ({ color }: { color: string }) => (
                  <Icon
                     color={color}
                     name='weight-pound'
                     type='material-community'
                  />
               ),
            }}
         />
         <AuthenticatedTabs.Screen
            name='Cardio'
            component={Cardio}
            options={{
               tabBarLabel: 'Cardio',
               headerTitle: (props) => <DateTitle />,
               tabBarIcon: ({ color }: { color: string }) => (
                  <Icon color={color} name='user' type='feather' />
               ),
            }}
         />
      </AuthenticatedTabs.Navigator>
   );
};
