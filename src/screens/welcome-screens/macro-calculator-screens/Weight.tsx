import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@rneui/themed';
import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { WelcomeStackParamList } from '../../../../types/types';
import { CustomButtonGroup } from '../../../components/form-inputs/custom-button-group/CustomButtonGroup';
import { CustomNumberInput } from '../../../components/form-inputs/custom-number-input/CustomNumberInput';
import { CustomLinearProgress } from '../../../components/linear-progress/CustomLinearProgress';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import {
   getCalculatedGoals,
   resetStatus,
} from '../../../reducers/goalsReducer';
import { updateWeight } from '../../../reducers/userReducer';
import { global } from '../../../style/global.styles';
import { createAlert } from '../../../utils/createAlert';

type Props = NativeStackScreenProps<WelcomeStackParamList, 'Weight'>;

export const Weight = ({ navigation }: Props) => {
   const dispatch = useAppDispatch();
   const [selectedIndex, setSelectedIndex] = useState(0);
   const [currentWeight, setCurrentWeight] = useState<string>('0');

   const handlePress = () => {
      let weightMetric;
      if (selectedIndex === 0) {
         weightMetric = 'lb';
         if (Number(currentWeight) < 75 || Number(currentWeight) > 450) {
            createAlert({
               heading: 'Hold on!',
               body: 'Please enter a weight between 50 and 450 lbs.',
            });
            return;
         }
      } else {
         if (Number(currentWeight) < 35 || Number(currentWeight) > 205) {
            createAlert({
               heading: 'Hold on!',
               body: 'Please enter a weight between 35 and 205 kg.',
            });
         }
         weightMetric = 'kg';
      }

      const action = updateWeight({
         weight: Number(currentWeight),
         weightMetric,
      });
      dispatch(action);
      dispatch(resetStatus);
      dispatch(getCalculatedGoals());
      navigation.navigate('CalculatedGoals');
   };
   return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <View style={[global.screenEnd]}>
            <CustomLinearProgress index={6} progress={1} />
            <Text h4 style={[global.screenTitle, global.textCenter]}>
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
            <Button onPress={handlePress} title={`Calculate Goals`} size='lg' />
         </View>
      </TouchableWithoutFeedback>
   );
};
