import { useTheme } from '@rneui/themed';
import { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import { useAppDispatch } from '../../redux/hooks/reduxHooks';
import { updateExerciseRepMaxes } from '../../redux/reducers/weightLiftingReducer';
import { global } from '../../style/global.styles';
import { calculate1RepMax } from '../../utils/calculate1RepMax';
import { capitalizeExerciseName } from '../../utils/capitalizeExerciseName';
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
   const dispatch = useAppDispatch();
   const { theme } = useTheme();
   const [weight, setWeight] = useState<string>('');
   const [reps, setReps] = useState<string>('1');
   //sets the default error state to be true only when the user has not entered anything and state is an empty string
   const initialError = weight === '' ? true : false;
   const [error, setError] = useState<boolean>(initialError);
   const [errorMessage, setErrorMessage] = useState<string>('');
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

   //this calculates the value for 1RM, or just returns the typed in value
   const oneRepMax = useMemo(() => {
      if (activeIndex === 0 && Number(weight) >= 1000) {
         setErrorMessage('Please enter a weight below 1000 lbs.');
         setError(true);
         return Number(weight);
      } else if (activeIndex === 1 && Number(weight) >= 455) {
         setErrorMessage('Please enter a weight below 455 kg.');
         setError(true);
         return Number(weight);
      } else if (Number(reps) > 20) {
         setErrorMessage('Please enter a rep range less than or equal to 20.');
         setError(true);
         return Number(weight);
      } else if (weight === '') {
         //this needs to be called in case initial value is zero or empty
         setError(true);
      } else {
         setError(false);
      }
      const weightMetric = labelValues[activeIndex] as 'lb' | 'kg';
      const result = calculate1RepMax(
         Number(reps),
         Number(weight),
         weightMetric
      );
      return result.toString();
   }, [weight, reps, activeIndex]);

   //updates the exercise object inside global state, if error is present saves it to the object, converts to lbs if currently set to kg
   useEffect(() => {
      const trainingMax =
         activeIndex === 0
            ? Math.round(
                 Number(oneRepMax) * (Number(trainingMaxPercentage) / 100)
              )
            : Math.round(
                 (Number(oneRepMax) / 2.2) *
                    (Number(trainingMaxPercentage) / 100)
              );
      dispatch(
         updateExerciseRepMaxes({
            name: exercise,
            max: trainingMax,
            reps,
            weight,
            weightMetric: labelValues[activeIndex],
            isError: error,
         })
      );
   }, [oneRepMax, error]);

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

   const styles = makeExerciseCalcstyles(theme.colors);
   return (
      <View
         style={[
            global.largeContainer,
            styles.container,
            global.containerBorder,
         ]}
      >
         <CustomText
            h2={true}
            fontFamily='Lato_Bold'
            humanText={capitalizeExerciseName(exercise)}
         />
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
