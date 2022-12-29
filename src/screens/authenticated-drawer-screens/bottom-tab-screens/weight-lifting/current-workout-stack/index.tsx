import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@rneui/themed';
import * as React from 'react';
import { CurrentWorkoutStackType } from '../../../../../../types/types';
import { AvatarHeader } from '../../../../../components/avatar-header/AvatarHeader';
import { useAppSelector } from '../../../../../redux/hooks/reduxHooks';
import { getProgramByUserSelectedId } from '../../../../../redux/reducers/weightLiftingReducer';
import { Overview } from './Overview';

const Stack = createNativeStackNavigator<CurrentWorkoutStackType>();

export const CurrentWorkoutStack = () => {
   const { theme } = useTheme();
   const program = useAppSelector(getProgramByUserSelectedId);

   return (
      <Stack.Navigator
         initialRouteName='Overview'
         screenOptions={{
            headerRight: () => <AvatarHeader />,
            headerBackTitleVisible: false,
            headerTintColor: theme.colors.black,
         }}
      >
         <Stack.Screen
            name='Overview'
            component={Overview}
            options={() => ({ headerTitle: program[0].name })}
         />
      </Stack.Navigator>
   );
};
