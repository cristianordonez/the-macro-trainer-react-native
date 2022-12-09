import { Text, useTheme } from '@rneui/themed';
import { useMemo, useState } from 'react';
import { View } from 'react-native';
import { global } from '../../style/global.styles';
import { calculate1RepMax } from '../../utils/calculate1RepMax';
import { CustomNumberInput } from '../form-inputs/custom-number-input/CustomNumberInput';
import { makeExerciseCalcstyles } from './makeExerciseCalcStyles';

interface Props {
   exercise: string;
   activeIndex: number;
}

export const ExerciseCalculatorInput = ({ exercise, activeIndex }: Props) => {
   const { theme } = useTheme();
   const [weight, setWeight] = useState<string>('0');
   const [reps, setReps] = useState<string>('0');
   const [error, setError] = useState<boolean>(false);
   const [errorMessage, setErrorMessage] = useState<string>('');
   const [oneRepMax, setOneRepMax] = useState<string>('0');

   const labelValues = ['lb', 'kg'];

   const inputs = [
      {
         label: labelValues[activeIndex],
         value: weight,
         setValue: setWeight,
         humanText: 'Weight',
      },
      {
         label: 'reps',
         value: reps,
         setValue: setReps,
         humanText: 'Reps',
      },
   ];

   // useEffect(() => {
   //    if (activeIndex === 0 && Number(weight) >= 1000) {
   //       setErrorMessage('Please enter a weight below 1000 lbs.');
   //       setError(true);
   //       return;
   //    } else if (activeIndex === 1 && Number(weight) >= 455) {
   //       setErrorMessage('Please enter a weight below 455 kg.');
   //       setError(true);
   //       return;
   //    } else {
   //       setError(false);
   //    }
   //    if (Number(reps) > 10) {
   //       setErrorMessage('Please enter a rep range less than 10.');
   //       setError(true);
   //       return;
   //    } else {
   //       setError(false);
   //    }
   // }, [reps, weight, activeIndex]);

   useMemo(() => {
      if (activeIndex === 0 && Number(weight) >= 1000) {
         setErrorMessage('Please enter a weight below 1000 lbs.');
         setError(true);
         return;
      } else if (activeIndex === 1 && Number(weight) >= 455) {
         setErrorMessage('Please enter a weight below 455 kg.');
         setError(true);
         return;
      } else {
         setError(false);
      }
      if (Number(reps) > 10) {
         setErrorMessage('Please enter a rep range less than 10.');
         setError(true);
         return;
      } else {
         setError(false);
      }
      const weightMetric = labelValues[activeIndex] as 'lb' | 'kg';
      const result = calculate1RepMax(
         Number(reps),
         Number(weight),
         weightMetric
      );
      setOneRepMax(result.toString());
   }, [weight, reps, activeIndex]);
   //todo create array to map over that includes training max to make another row
   const styles = makeExerciseCalcstyles(theme.colors);
   return (
      // <KeyboardAvoidingView
      //    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      // >
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
               <Text style={[global.textLarge, styles.weightText]}>
                  {oneRepMax} {labelValues[activeIndex]}
               </Text>
            </View>
         </View>
         <View style={styles.calculateContents}>
            {error ? (
               <Text
                  style={[
                     global.textSmall,
                     styles.textError,
                     global.textCenter,
                     global.gap,
                  ]}
               >
                  {errorMessage}
               </Text>
            ) : null}
            <Text style={[styles.calculateHeader, global.textMedium]}>
               Calculate 1RM
            </Text>
            {inputs.map((inputItem) => (
               <View style={styles.innerRow} key={inputItem.humanText}>
                  <View style={styles.innerRowContents}>
                     <Text style={[global.textCenter, global.textMedium]}>
                        {inputItem.humanText}
                     </Text>
                  </View>
                  <View style={styles.innerRowContents}>
                     <CustomNumberInput
                        placeholder={'0'}
                        secureTextEntry={false}
                        keyboardType={'number-pad'}
                        rightLabelVal={inputItem.label}
                        value={inputItem.value}
                        setVal={inputItem.setValue}
                        height={'75%'}
                        width={'75%'}
                     />
                  </View>
               </View>
            ))}
         </View>
      </View>
      // </KeyboardAvoidingView>
   );
};
