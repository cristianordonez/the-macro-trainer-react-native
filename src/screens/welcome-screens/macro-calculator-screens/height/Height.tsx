import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, useTheme } from '@rneui/themed';
import React, { useCallback, useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { WelcomeStackParamList } from '../../../../../types/types';
import { CustomButtonGroup } from '../../../../components/form-inputs/custom-button-group/CustomButtonGroup';
import { CustomNumberInput } from '../../../../components/form-inputs/custom-number-input/CustomNumberInput';
import { DropDownGroup } from '../../../../components/form-inputs/drop-down-group/DropDownGroup';
import { CustomLinearProgress } from '../../../../components/linear-progress/CustomLinearProgress';
import { global } from '../../../../style/global.styles';
import { makeHeightStyles } from './styles';

type DropDownItem = {
   label: string;
   value: number;
};

type Props = NativeStackScreenProps<WelcomeStackParamList, 'Height'>;

export const Height = ({ navigation }: Props) => {
   const { theme } = useTheme();

   const [selectedIndex, setSelectedIndex] = useState(0);
   const [openFt, setOpenFt] = useState(false);
   const [currentFtValue, setCurrentFtValue] = useState<null | number>(null);
   const [ftItems, setFtItems] = useState<[] | DropDownItem[]>([]);
   const [openInch, setOpenInch] = useState<boolean>(false);
   const [currentInchValue, setCurrentInchValue] = useState<null | number>(
      null
   );
   const [inchItems, setInchItems] = useState<[] | DropDownItem[]>([]);

   const onFtOpen = useCallback(() => {
      setOpenInch(false);
   }, []);

   const onInchOpen = useCallback(() => {
      setOpenFt(false);
   }, []);

   const heightStyles = makeHeightStyles(theme.colors);
   return (
      <TouchableWithoutFeedback
         onPress={() => {
            setOpenFt(false);
            setOpenInch(false);
         }}
      >
         <View style={global.screenEnd}>
            <CustomLinearProgress index={5} progress={0.68} />
            <Text h4 style={global.screenTitle}>
               How tall are you?
            </Text>
            <View
               style={[{ width: '100%', height: '75%' }, heightStyles.inputRow]}
            >
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
                     currentFtValue={currentFtValue}
                     setCurrentFtValue={setCurrentFtValue}
                     currentInchValue={currentInchValue}
                     setCurrentInchValue={setCurrentInchValue}
                  />
               ) : (
                  <View style={heightStyles.inputContainer}>
                     <CustomNumberInput
                        placeholder={'Cm'}
                        secureTextEntry={false}
                        keyboardType={'numeric'}
                        rightLabelVal={'cm'}
                     />
                  </View>
               )}
               <View style={heightStyles.toggleContainer}>
                  <CustomButtonGroup
                     buttons={['ft', 'cm']}
                     selectedIndex={selectedIndex}
                     setSelectedIndex={setSelectedIndex}
                  />
               </View>
            </View>
            <Button
               onPress={() => navigation.navigate('Weight')}
               title={`Continue`}
               size='lg'
            />
         </View>
      </TouchableWithoutFeedback>
   );
};
