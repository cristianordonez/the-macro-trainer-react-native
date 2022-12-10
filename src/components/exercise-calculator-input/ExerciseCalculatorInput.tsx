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
   const [reps, setReps] = useState<string>('1');
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

   //todo allow screen to focus on input when entering values
   const calculationRows = [
      {
         leftLabel: 'Estimated 1 rep max: ',
         calculationValue: oneRepMax,
         id: 0,
      },
      {
         leftLabel: 'Training max (90% of 1RM): ',
         calculationValue: Math.round((Number(oneRepMax) * 0.9) / 5) * 5,
         id: 1,
      },
   ];
   const styles = makeExerciseCalcstyles(theme.colors);
   return (
      <View
         style={[
            global.largeContainer,
            styles.container,
            global.containerBorder,
         ]}
      >
         <Text style={[global.textBoldLarge, { alignSelf: 'center' }]}>
            {exercise}
         </Text>
         {calculationRows.map((row) => (
            <View style={styles.mainRow} key={row.id}>
               <Text style={[[styles.mainRowText, global.textMedium]]}>
                  {row.leftLabel}
               </Text>
               <View style={styles.inputContainer}>
                  <Text style={[global.textLarge, styles.weightText]}>
                     {row.calculationValue} {labelValues[activeIndex]}
                  </Text>
               </View>
            </View>
         ))}
         <View style={styles.calculateContents}>
            {error ? (
               <Text
                  style={[
                     global.textSmall,
                     styles.textError,
                     global.textCenter,
                  ]}
               >
                  {errorMessage}
               </Text>
            ) : null}
            <Text style={[styles.calculateHeader, global.textBold]}>
               Calculate 1RM
            </Text>
            {inputs.map((inputItem) => (
               <View style={styles.innerRow} key={inputItem.humanText}>
                  <View style={styles.innerRowContents}>
                     <Text style={[global.textMedium, styles.innerRowText]}>
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
                        textStyle={global.textMedium}
                     />
                  </View>
               </View>
            ))}
         </View>
      </View>
   );
};
