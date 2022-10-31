import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import { WelcomeStackParamList } from '../../../types/types';
import { CustomLinearProgress } from '../../components/linear-progress/CustomLinearProgress';
import { global } from '../../style/global.styles';

type Props = NativeStackScreenProps<WelcomeStackParamList, 'Gender'>;

export const Gender = ({ navigation }: Props) => {
   return (
      <View style={global.screenEnd}>
         <CustomLinearProgress index={3} progress={0.48} />
         <Text h4> What is your gender?</Text>
         <Button
            onPress={() => navigation.navigate('Age')}
            title={`Continue`}
            size='lg'
         />
      </View>
   );
};
