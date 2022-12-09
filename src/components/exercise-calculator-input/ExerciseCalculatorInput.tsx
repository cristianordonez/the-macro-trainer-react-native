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

   return (
      <View
         key={exercise}
         style={[
            global.largeContainer,
            styles.container,
            global.containerBorder,
         ]}
      >
         <Text style={[]}>{exercise}</Text>
         <View style={styles.mainRow}>
            <Text style={[styles.mainRowText]}>Estimated 1 rep max: </Text>
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
            <Text style={styles.calculateHeader}>Calculate 1RM</Text>
            {inputValues.map((value) => (
               <View style={styles.innerRow} key={value}>
                  <View style={styles.innerRowContents}>
                     <Text style={{ textAlign: 'center' }}>{value}</Text>
                  </View>
                  <View style={styles.innerRowContents}>
                     <CustomNumberInput
                        placeholder={'0'}
                        secureTextEntry={false}
                        keyboardType={'number-pad'}
                        rightLabelVal={activeIndex === 0 ? 'lb' : 'kg'}
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
