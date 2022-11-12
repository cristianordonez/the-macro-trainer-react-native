import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@rneui/themed';
import React, { useState } from 'react';
import { View } from 'react-native';
import { WelcomeStackParamList } from '../../../../types/types';
import { useAppDispatch } from '../../../app/hooks/reduxHooks';
import { updateWeight } from '../../../app/reducers/userReducer';
import { CustomButtonGroup } from '../../../components/form-inputs/custom-button-group/CustomButtonGroup';
import { CustomNumberInput } from '../../../components/form-inputs/custom-number-input/CustomNumberInput';
import { CustomLinearProgress } from '../../../components/linear-progress/CustomLinearProgress';
import { global } from '../../../style/global.styles';

type Props = NativeStackScreenProps<WelcomeStackParamList, 'Weight'>;

export const Weight = ({ navigation }: Props) => {
   const dispatch = useAppDispatch();
   const [selectedIndex, setSelectedIndex] = useState(0);
   const [currentWeight, setCurrentWeight] = useState<string>('0');

   const handlePress = () => {
      let weightMetric, weight;
      if (selectedIndex === 0) {
         weightMetric = 'lb';
      } else {
         weightMetric = 'kg';
      }
      const action = updateWeight({
         weight: Number(currentWeight),
         weightMetric,
      });
      dispatch(action);
      navigation.navigate('CompleteRegistration');
   };
   return (
      <View style={global.screenEnd}>
         <CustomLinearProgress index={6} progress={0.82} />
         <Text h4 style={global.screenTitle}>
            What is your last known weight?
         </Text>
         <View style={global.inputRow}>
            <View style={global.inputContainer}>
               <CustomNumberInput
                  placeholder={selectedIndex === 0 ? 'lbs' : 'kg'}
                  secureTextEntry={false}
                  keyboardType={'numeric'}
                  value={currentWeight}
                  setVal={setCurrentWeight}
                  rightLabelVal={selectedIndex === 0 ? 'lbs' : 'kg'}
               />
            </View>
            <View style={global.toggleContainer}>
               <CustomButtonGroup
                  buttons={['lb', 'kg']}
                  selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
               />
            </View>
         </View>
         <Button onPress={handlePress} title={`Complete`} size='lg' />
      </View>
   );
};
