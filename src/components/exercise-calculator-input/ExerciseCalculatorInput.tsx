import { Text, useTheme } from '@rneui/themed';
import { useState } from 'react';
import { View } from 'react-native';
import { global } from '../../style/global.styles';
import { CustomNumberInput } from '../form-inputs/custom-number-input/CustomNumberInput';
import { makeExerciseCalcstyles } from './makeExerciseCalcStyles';

interface Props {
   exercise: string;
   activeIndex: number;
}

export const ExerciseCalculatorInput = ({ exercise, activeIndex }: Props) => {
   const { theme } = useTheme();
   const styles = makeExerciseCalcstyles(theme.colors);
   const [trainingMax, setTrainingMax] = useState('0');

   const inputValues = ['Weight', 'Reps'];
   const labelValues = ['lb', 'kg'];

   return (
      <View
         key={exercise}
         style={[
            global.largeContainer,
            styles.container,
            global.containerBorder,
         ]}
      >
         <Text style={[global.textBoldLarge, { alignSelf: 'center' }]}>
            {exercise}
         </Text>
         <View style={styles.mainRow}>
            <Text style={[[styles.mainRowText, global.textMedium]]}>
               Estimated 1 rep max:{' '}
            </Text>
            <View style={styles.inputContainer}>
               <CustomNumberInput
                  placeholder={'0'}
                  secureTextEntry={false}
                  keyboardType={'number-pad'}
                  rightLabelVal={activeIndex === 0 ? 'lb' : 'kg'}
                  value={trainingMax}
                  setVal={setTrainingMax}
                  height={'100%'}
                  width={'100%'}
               />
            </View>
         </View>
         <View style={styles.calculateContents}>
            <Text style={[styles.calculateHeader, global.textMedium]}>
               Calculate 1RM
            </Text>
            {inputValues.map((value) => (
               <View style={styles.innerRow} key={value}>
                  <View style={styles.innerRowContents}>
                     <Text style={[global.textCenter, global.textMedium]}>
                        {value}
                     </Text>
                  </View>
                  <View style={styles.innerRowContents}>
                     <CustomNumberInput
                        placeholder={'0'}
                        secureTextEntry={false}
                        keyboardType={'number-pad'}
                        rightLabelVal={
                           value === 'Weight'
                              ? labelValues[activeIndex]
                              : 'reps'
                        }
                        value={trainingMax}
                        setVal={setTrainingMax}
                        height={'75%'}
                        width={'75%'}
                     />
                  </View>
               </View>
            ))}
         </View>
      </View>
   );
};
