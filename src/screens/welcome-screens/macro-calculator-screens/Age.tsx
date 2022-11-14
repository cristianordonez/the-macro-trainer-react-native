import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@rneui/themed';
import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { WelcomeStackParamList } from '../../../../types/types';
import { AgeSlider } from '../../../components/form-inputs/age-slider/AgeSlider';
import { CustomLinearProgress } from '../../../components/linear-progress/CustomLinearProgress';
import { updateAge } from '../../../reducers/userReducer';
import { global } from '../../../style/global.styles';

type Props = NativeStackScreenProps<WelcomeStackParamList, 'Age'>;

export const Age = ({ navigation }: Props) => {
   const [selectedVal, setSelectedVal] = useState<string>('18');
   const dispatch = useDispatch();

   const handlePress = () => {
      const action = updateAge(selectedVal);
      dispatch(action);
      navigation.navigate('Height');
   };
   return (
      <View style={global.screenEnd}>
         <CustomLinearProgress index={4} progress={0.56} />
         <Text style={global.screenTitle} h4>
            How old are you?
         </Text>
         <AgeSlider selectedVal={selectedVal} setSelectedVal={setSelectedVal} />
         <Button onPress={handlePress} title={`Continue`} size='lg' />
      </View>
   );
};
