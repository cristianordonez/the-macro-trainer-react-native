import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { ChangeProgramsStackType } from '../../../../../../types/types';
import { CustomText } from '../../../../../components/custom-text/CustomText';
import { ExerciseCalculatorInput } from '../../../../../components/exercise-calculator-input/ExerciseCalculatorInput';
import { CustomButtonGroup } from '../../../../../components/form-inputs/custom-button-group/CustomButtonGroup';
import { useAppSelector } from '../../../../../redux/hooks/reduxHooks';
import { selectProgramExercises } from '../../../../../redux/reducers/weightLiftingReducer';
import { global } from '../../../../../style/global.styles';

type Props = NativeStackScreenProps<ChangeProgramsStackType, 'EnterWeights'>;

export const EnterWeights = ({ navigation, route }: Props) => {
   const programName = route.params.programName;
   const [activeIndex, setActiveIndex] = useState<number>(0);

   const exercises = useAppSelector((state) =>
      selectProgramExercises(state, programName)
   );

   return (
      <KeyboardAvoidingView
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
         <ScrollView contentContainerStyle={global.scrollableContainer}>
            <View style={[global.rowCenter]}>
               <View
                  style={{ flex: 2, alignItems: 'center', paddingVertical: 20 }}
               >
                  <CustomText h1={true} humanText='Enter training maxes' />
               </View>
               <View style={{ flex: 1, alignItems: 'flex-start' }}>
                  <CustomButtonGroup
                     buttons={['lb', 'kg']}
                     selectedIndex={activeIndex}
                     setSelectedIndex={setActiveIndex}
                  />
               </View>
            </View>
            {exercises.map((exercise) => (
               <ExerciseCalculatorInput
                  key={exercise}
                  exercise={exercise}
                  activeIndex={activeIndex}
               />
            ))}
         </ScrollView>
      </KeyboardAvoidingView>
   );
};
