import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button } from '@rneui/themed';
import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { WelcomeStackParamList } from '../../../../types/types';
import { CustomText } from '../../../components/custom-text/CustomText';
import { AgeSlider } from '../../../components/form-inputs/age-slider/AgeSlider';
import { updateAge } from '../../../redux/reducers/userMetricsReducer';
import { global } from '../../../style/global.styles';
import { CustomLinearProgress } from './linear-progress/CustomLinearProgress';

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
         <CustomLinearProgress index={4} progress={0.64} />
         <View style={{ paddingTop: '20%' }}>
            <CustomText
               h1={true}
               fontFamily='Lato_Bold'
               textAlign='center'
               humanText='How old are you?'
            />
         </View>
         <AgeSlider selectedVal={selectedVal} setSelectedVal={setSelectedVal} />
         <Button onPress={handlePress} title={`Continue`} size='lg' />
      </View>
   );
};
