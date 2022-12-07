import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { CurrentWorkoutsStack } from '../../../../../../types/types';

const Stack = createNativeStackNavigator<CurrentWorkoutsStack>();

//this is stack that renders if user has selected program already
export const CurrentWorkouts = () => {
   return (
      <Stack.Navigator>
         {/* <Stack.Screen name='Programs' component={HomeScreen} /> */}
      </Stack.Navigator>
   );
};
