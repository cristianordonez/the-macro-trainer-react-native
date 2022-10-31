import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import { WelcomeStackParamList } from '../../../types/types';
import { CustomLinearProgress } from '../../components/linear-progress/CustomLinearProgress';
import { global } from '../../style/global.styles';

type Props = NativeStackScreenProps<WelcomeStackParamList, 'Age'>;

export const Age = ({ navigation }: Props) => {
   return (
      <View style={global.screenEnd}>
         <Text>age</Text>
         <CustomLinearProgress index={4} progress={0.64} />
         <Button
            onPress={() => navigation.navigate('Height')}
            title={`Continue`}
            size='lg'
         />
      </View>
   );
};
