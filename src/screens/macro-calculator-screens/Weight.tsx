import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import { WelcomeStackParamList } from '../../../types/types';
import { CustomLinearProgress } from '../../components/linear-progress/CustomLinearProgress';
import { global } from '../../style/global.styles';

type Props = NativeStackScreenProps<WelcomeStackParamList, 'Weight'>;

export const Weight = ({ navigation }: Props) => {
   return (
      <View style={global.screenEnd}>
         <CustomLinearProgress index={6} progress={1} />
         <Text h4>What is your last known weight?</Text>
         <Button
            onPress={() => navigation.navigate('Main')}
            title={`Complete`}
            size='lg'
         />
      </View>
   );
};
