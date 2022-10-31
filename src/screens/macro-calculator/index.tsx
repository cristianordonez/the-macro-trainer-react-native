import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@rneui/themed';
import { ActivityLevel } from './ActivityLevel';
import { Age } from './Age';
import { Gender } from './Gender';
import { Goals } from './Goals';
import { Height } from './Height';
import { Weight } from './Weight';

const Stack = createStackNavigator();

export const MacroCalculator = () => {
   const { theme } = useTheme();
   return (
      <>
         <Stack.Navigator
            screenOptions={{
               headerTitle: '',
               headerBackTitleVisible: false,
               headerShadowVisible: false,
               headerStyle: {
                  backgroundColor: theme.colors.background,
               },
               headerTintColor: theme.colors.black,
               cardStyle: {
                  backgroundColor: '#080C24',
                  opacity: 1,
               },
            }}
         >
            <Stack.Screen name='Goals' component={Goals} />
            <Stack.Screen name='ActivityLevel' component={ActivityLevel} />
            <Stack.Screen name='Gender' component={Gender} />
            <Stack.Screen name='Age' component={Age} />
            <Stack.Screen name='Height' component={Height} />
            <Stack.Screen name='Weight' component={Weight} />
         </Stack.Navigator>
      </>
   );
};
