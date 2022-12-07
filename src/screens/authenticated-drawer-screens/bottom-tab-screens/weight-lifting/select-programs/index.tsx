import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@rneui/themed';
import * as React from 'react';
import { SelectProgramsStack } from '../../../../../../types/types';
import { AvatarHeader } from '../../../../../components/avatar-header/AvatarHeader';
import { Categories } from './Categories';
import { Programs } from './Programs';

const Stack = createNativeStackNavigator<SelectProgramsStack>();

export const SelectPrograms = () => {
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
         <Stack.Screen name='Categories' component={Categories} />
         <Stack.Screen
            name='Programs'
            component={Programs}
            options={({ route }) => ({ title: route.params.category })}
         />
      </Stack.Navigator>
   );
};
