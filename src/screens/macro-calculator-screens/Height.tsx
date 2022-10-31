import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import { WelcomeStackParamList } from '../../../types/types';
import { CustomLinearProgress } from '../../components/linear-progress/CustomLinearProgress';
import { global } from '../../style/global.styles';

type Props = NativeStackScreenProps<WelcomeStackParamList, 'Height'>;

export const Height = ({ navigation }: Props) => {
   return (
      <View style={global.screenEnd}>
         <Text>height</Text>
         <CustomLinearProgress index={5} progress={0.8} />
         <Button
            onPress={() => navigation.navigate('Weight')}
            title={`Continue`}
            size='lg'
         />
      </View>
   );
};
