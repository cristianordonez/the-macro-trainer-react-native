import { useTheme } from '@rneui/themed';
import { useMemo, useState } from 'react';
import { View } from 'react-native';
import { global } from '../../style/global.styles';
import { calculate1RepMax } from '../../utils/calculate1RepMax';
import { CustomText } from '../custom-text/CustomText';
import { CustomNumberInput } from '../form-inputs/custom-number-input/CustomNumberInput';
import { makeExerciseCalcstyles } from './makeExerciseCalcStyles';

interface Props {
   exercise: string;
   activeIndex: number;
   trainingMaxPercentage: string;
}

export const ExerciseCalculatorInput = ({
   exercise,
   activeIndex,
   trainingMaxPercentage,
}: Props) => {
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

   const calculationRows = [
      {
         leftLabel: 'Estimated 1 rep max: ',
         calculationValue: oneRepMax,
         id: 0,
      },
      {
         leftLabel: `Training max (${trainingMaxPercentage}% of 1RM): `,
         calculationValue: Math.round(
            Number(oneRepMax) * (Number(trainingMaxPercentage) / 100)
         ),
         id: 1,
      },
   ];

   //todo dispatch action that saves exercise and 1 rep nax to store
   const styles = makeExerciseCalcstyles(theme.colors);
   return (
      <View
         style={[
            global.largeContainer,
            styles.container,
            global.containerBorder,
         ]}
      >
         <CustomText h2={true} fontFamily='Lato_Bold' humanText={exercise} />
         {calculationRows.map((row) => (
            <View style={styles.mainRow} key={row.id}>
               <CustomText h2={true} humanText={row.leftLabel} />
               <View style={styles.inputContainer}>
                  <CustomText
                     h1={true}
                     color='primary'
                     textAlign='right'
                     humanText={`${row.calculationValue} ${labelValues[activeIndex]}`}
                  />
               </View>
            </View>
         ))}
         <View style={styles.calculateContents}>
            {error ? (
               <CustomText
                  color='error'
                  h4={true}
                  fontFamily='Lato_Italic'
                  textAlign='center'
                  humanText={errorMessage}
               />
            ) : null}
            <CustomText
               h3={true}
               fontFamily='Lato_Bold'
               humanText={'Calculate 1RM'}
            />

            {inputs.map((inputItem) => (
               <View style={styles.innerRow} key={inputItem.humanText}>
                  <View style={styles.innerRowContents}>
                     <View style={{ alignSelf: 'flex-start' }}>
                        <CustomText
                           h3={true}
                           humanText={inputItem.humanText}
                           textAlign='left'
                        />
                     </View>
                  </View>
                  <View style={styles.innerRowContents}>
                     <CustomNumberInput
                        placeholder={'0'}
                        secureTextEntry={false}
                        keyboardType={'number-pad'}
                        rightLabelVal={inputItem.label}
                        value={inputItem.value}
                        setVal={inputItem.setValue}
                     />
                  </View>
               </View>
            ))}
         </View>
      </View>
   );
};
