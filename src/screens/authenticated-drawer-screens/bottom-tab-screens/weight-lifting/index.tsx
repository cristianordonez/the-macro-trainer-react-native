import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { WeightLiftingStack } from '../../../../../types/types';
import { useAppSelector } from '../../../../redux/hooks/reduxHooks';
import { selectProgramStatus } from '../../../../redux/reducers/weightLiftingReducer';
import { CurrentWorkouts } from './current-workouts';
import { SelectPrograms } from './select-programs';

const Stack = createNativeStackNavigator<WeightLiftingStack>();

export const WeightLifting = () => {
   const hasSelectedProgram = useAppSelector(selectProgramStatus);

   return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         {hasSelectedProgram ? (
            <Stack.Screen name='CurrentWorkouts' component={CurrentWorkouts} />
         ) : (
            <Stack.Screen name='SelectPrograms' component={SelectPrograms} />
         )}
      </Stack.Navigator>
   );
};
