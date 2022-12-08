import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Icon, useTheme } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';
import { BottomTabsParamList, DrawerStack } from '../../../../types/types';
import { AvatarHeader } from '../../../components/avatar-header/AvatarHeader';
import { DateTitle } from '../../../components/date-title/DateTitle';
import { AddBtnModal } from './add-btn-modal/AddBtnModal';
import { Cardio } from './cardio/Cardio';
import { FoodLog } from './food-log/FoodLog';
import { Home } from './home/Home';
import { WeightLifting } from './weight-lifting';

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();
type Props = NativeStackScreenProps<DrawerStack, 'BottomTabScreen'>;

export const BottomTabScreen = ({ navigation, route }: Props) => {
   const { theme } = useTheme();

   return (
      <BottomTabs.Navigator
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
         <BottomTabs.Screen
            name='Home'
            component={Home}
            options={{
               headerTitle: (props) => <DateTitle />,
               tabBarIcon: ({ color }: { color: string }) => (
                  <Icon color={color} name='home' type='feather' />
               ),
            }}
         />
         <BottomTabs.Screen
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
         <BottomTabs.Screen
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
         <BottomTabs.Screen
            name='WeightLifting'
            component={WeightLifting}
            options={{
               headerShown: false,
               tabBarLabel: 'Weight Lifting',
               tabBarIcon: ({ color }: { color: string }) => (
                  <Icon
                     color={color}
                     name='weight-pound'
                     type='material-community'
                  />
               ),
            }}
         />
         <BottomTabs.Screen
            name='Cardio'
            component={Cardio}
            options={{
               tabBarLabel: 'Cardio',
               headerTitle: (props) => <DateTitle />,
               tabBarIcon: ({ color }: { color: string }) => (
                  <Icon color={color} name='running' type='font-awesome-5' />
               ),
            }}
         />
      </BottomTabs.Navigator>
   );
};
