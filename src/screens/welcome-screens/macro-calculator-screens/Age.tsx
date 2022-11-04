import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import { WelcomeStackParamList } from '../../../../types/types';
import { AgeSlider } from '../../../components/form-inputs/age-slider/AgeSlider';
import { CustomLinearProgress } from '../../../components/linear-progress/CustomLinearProgress';
import { global } from '../../../style/global.styles';

type Props = NativeStackScreenProps<WelcomeStackParamList, 'Age'>;

export const Age = ({ navigation }: Props) => {
   return (
      <View style={global.screenEnd}>
         <CustomLinearProgress index={4} progress={0.56} />
         <Text h4>How old are you?</Text>
         <AgeSlider />
         <Text style={global.textBold}>years old</Text>
         <Button
            onPress={() => navigation.navigate('Height')}
            title={`Continue`}
            size='lg'
         />
      </View>
   );
};
