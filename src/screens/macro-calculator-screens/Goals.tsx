import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import { WelcomeStackParamList } from '../../../types/types';
import { CustomLinearProgress } from '../../components/linear-progress/CustomLinearProgress';
import { global } from '../../style/global.styles';

type Props = NativeStackScreenProps<WelcomeStackParamList, 'Goals'>;

export const Goals = ({ navigation }: Props) => {
   return (
      <View style={global.screenEnd}>
         <Text>goals</Text>
         <CustomLinearProgress index={1} progress={0.16} />
         <Button
            onPress={() => navigation.navigate('ActivityLevel')}
            title={`Continue`}
            size='lg'
         />
      </View>
   );
};
