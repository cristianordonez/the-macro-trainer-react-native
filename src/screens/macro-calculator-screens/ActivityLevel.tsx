import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import { WelcomeStackParamList } from '../../../types/types';
import { global } from '../../style/global.styles';

type Props = NativeStackScreenProps<WelcomeStackParamList, 'ActivityLevel'>;

export const ActivityLevel = ({ navigation }: Props) => {
   return (
      <View style={global.screenEnd}>
         <Text>activity level</Text>
         <Button
            onPress={() => navigation.navigate('Gender')}
            title={`Continue`}
            size='lg'
         />
      </View>
   );
};
