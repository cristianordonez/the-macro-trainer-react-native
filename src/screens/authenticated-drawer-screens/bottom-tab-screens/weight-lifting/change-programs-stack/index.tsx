import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@rneui/themed';
import * as React from 'react';
import { ChangeProgramsStackType } from '../../../../../../types/types';
import { AvatarHeader } from '../../../../../components/avatar-header/AvatarHeader';
import { Categories } from './Categories';
import { EnterWeights } from './EnterWeights';
import { ProgramDescription } from './ProgramDescription';
import { Programs } from './Programs';

const Stack = createNativeStackNavigator<ChangeProgramsStackType>();

export const ChangeProgramsStack = () => {
   const { theme } = useTheme();

   return (
      <Stack.Navigator
         initialRouteName='Categories'
         screenOptions={{
            headerRight: () => <AvatarHeader />,
            headerBackTitleVisible: false,
            headerTintColor: theme.colors.black,
         }}
      >
         <Stack.Screen
            name='Categories'
            component={Categories}
            options={() => ({ headerTitle: 'Select a Program' })}
         />
         <Stack.Screen
            name='Programs'
            component={Programs}
            options={({ route }) => ({ title: route.params.category })}
         />
         <Stack.Screen
            name='ProgramDescription'
            component={ProgramDescription}
            options={({ route }) => ({ title: route.params.programName })}
         />
         <Stack.Screen
            name='EnterWeights'
            component={EnterWeights}
            options={({ route }) => ({ title: 'Enter Training Maxes' })}
         />
      </Stack.Navigator>
   );
};
