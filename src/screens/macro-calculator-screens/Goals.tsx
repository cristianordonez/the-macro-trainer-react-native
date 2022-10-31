import { Button, Text } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import { global } from '../../style/global.styles';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeStackParamList } from '../../../types/types';

type Props = NativeStackScreenProps<WelcomeStackParamList, 'Goals'>;
//https://stackoverflow.com/questions/65422185/proper-typescript-type-for-a-reused-screen-in-react-navigation-v5
export const Goals = ({ navigation }: Props) => {
   return (
      <View style={global.screenEnd}>
         <Text>goals</Text>
         <Button
            onPress={() => navigation.navigate('ActivityLevel')}
            title={`Continue`}
            size='lg'
         />
      </View>
   );
};
