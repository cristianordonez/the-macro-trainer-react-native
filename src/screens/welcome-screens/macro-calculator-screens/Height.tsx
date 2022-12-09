import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@rneui/themed';
import React, { useCallback, useState } from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { WelcomeStackParamList } from '../../../../types/types';
import { CustomButtonGroup } from '../../../components/form-inputs/custom-button-group/CustomButtonGroup';
import { CustomNumberInput } from '../../../components/form-inputs/custom-number-input/CustomNumberInput';
import { DropDownGroup } from '../../../components/form-inputs/drop-down-group/DropDownGroup';
import { useAppDispatch } from '../../../redux/hooks/reduxHooks';
import { updateHeight } from '../../../redux/reducers/userMetricsReducer';
import { global } from '../../../style/global.styles';
import { createAlert } from '../../../utils/createAlert';
import { CustomLinearProgress } from './linear-progress/CustomLinearProgress';

type DropDownItem = {
   label: string;
   value: number;
};

type Props = NativeStackScreenProps<WelcomeStackParamList, 'Height'>;

export const Height = ({ navigation }: Props) => {
   const dispatch = useAppDispatch();

   const [selectedIndex, setSelectedIndex] = useState(0);
   const [ftItems, setFtItems] = useState<[] | DropDownItem[]>([]);
   const [openFt, setOpenFt] = useState(false);
   const [currentFtVal, setCurrentFtVal] = useState<null | number>(null);
   const [inchItems, setInchItems] = useState<[] | DropDownItem[]>([]);
   const [openInch, setOpenInch] = useState<boolean>(false);
   const [currentInchVal, setCurrentInchVal] = useState<null | number>(null);
   const [currentCmVal, setCurrentCmVal] = useState<string>('0');

   const onFtOpen = useCallback(() => {
      setOpenInch(false);
   }, []);

   const onInchOpen = useCallback(() => {
      setOpenFt(false);
   }, []);

   const handlePress = () => {
      let height, heightMetric;
      if (selectedIndex === 0) {
         if (currentFtVal === null || currentInchVal === null) {
            createAlert({
               heading: 'Hold on!',
               message: 'Please finish selecting your height.',
               btnOptions: [{ text: 'Okay' }],
            });
            return;
         } else {
            height = Number(currentFtVal) * 12 + Number(currentInchVal);
            heightMetric = 'ft';
         }
      } else {
         if (Number(currentCmVal) < 90 || Number(currentCmVal) > 240) {
            createAlert({
               heading: 'Hold on!',
               message: 'Please enter a height between 90 and 240 cm.',
               btnOptions: [{ text: 'Okay' }],
            });

            return;
         } else {
            height = Number(currentCmVal);
            heightMetric = 'cm';
         }
      }
      const action = updateHeight({ height, heightMetric });
      dispatch(action);
      navigation.navigate('Weight');
   };

   return (
      <TouchableWithoutFeedback
         onPress={
            selectedIndex === 0
               ? () => {
                    setOpenFt(false);
                    setOpenInch(false);
                 }
               : Keyboard.dismiss
         }
      >
         <View style={global.screenEnd}>
            <CustomLinearProgress index={5} progress={0.8} />
            <Text h4 style={global.screenTitle}>
               How tall are you?
            </Text>
            <View style={[global.inputRow]}>
               {selectedIndex === 0 ? (
                  <DropDownGroup
                     openFt={openFt}
                     setOpenFt={setOpenFt}
                     openInch={openInch}
                     setOpenInch={setOpenInch}
                     ftItems={ftItems}
                     setFtItems={setFtItems}
                     inchItems={inchItems}
                     setInchItems={setInchItems}
                     onFtOpen={onFtOpen}
                     onInchOpen={onInchOpen}
                     currentFtVal={currentFtVal}
                     setCurrentFtVal={setCurrentFtVal}
                     currentInchVal={currentInchVal}
                     setCurrentInchVal={setCurrentInchVal}
                  />
               ) : (
                  <View style={global.inputContainer}>
                     <CustomNumberInput
                        placeholder={'Cm'}
                        secureTextEntry={false}
                        keyboardType={'numeric'}
                        setVal={setCurrentCmVal}
                        rightLabelVal={'cm'}
                        value={currentCmVal}
                        height={'100%'}
                        width={'100%'}
                     />
                  </View>
               )}
               <View style={global.toggleContainer}>
                  <CustomButtonGroup
                     buttons={['ft', 'cm']}
                     selectedIndex={selectedIndex}
                     setSelectedIndex={setSelectedIndex}
                  />
               </View>
            </View>
            <Button onPress={handlePress} title={`Continue`} size='lg' />
         </View>
      </TouchableWithoutFeedback>
   );
};
