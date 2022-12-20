import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button } from '@rneui/themed';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { ChangeProgramsStackType } from '../../../../../../types/types';
import { CustomText } from '../../../../../components/custom-text/CustomText';
import { ExerciseCalculatorInput } from '../../../../../components/exercise-calculator-input/ExerciseCalculatorInput';
import { CustomButtonGroup } from '../../../../../components/form-inputs/custom-button-group/CustomButtonGroup';
import { CustomNumberInput } from '../../../../../components/form-inputs/custom-number-input/CustomNumberInput';
import {
   useAppDispatch,
   useAppSelector,
} from '../../../../../redux/hooks/reduxHooks';
import {
   getActiveProgramUniqueExercises,
   saveExerciseRepMaxData,
} from '../../../../../redux/reducers/weightLiftingReducer';
import { global } from '../../../../../style/global.styles';

type Props = NativeStackScreenProps<ChangeProgramsStackType, 'EnterWeights'>;

export const EnterWeights = ({ navigation, route }: Props) => {
   //todo get initial values from store for user 1 rep maxes
   const dispatch = useAppDispatch();
   const [activeIndex, setActiveIndex] = useState<number>(0);
   const [trainingMaxPercentage, setTrainingMaxPercentage] = useState('90');
   const exercises = useAppSelector((state) =>
      getActiveProgramUniqueExercises(state)
   );

   //called when save button first clicks, gives option to confirm or cancels if error is present
   const handleSaveInitial = () => {
      //thunk that checks if there is error present or presents a confirm dialog
      dispatch(saveExerciseRepMaxData());
   };

   return (
      <KeyboardAvoidingView
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
         enabled
         keyboardVerticalOffset={100}
      >
         <ScrollView contentContainerStyle={[global.scrollableContainer]}>
            <View style={[global.rowCenter]}>
               <View
                  style={{ flex: 1, alignItems: 'center', paddingVertical: 20 }}
               >
                  <CustomText h2={true} humanText='Weight Metric: ' />
               </View>
               <View style={{ flex: 1, alignItems: 'flex-start' }}>
                  <CustomButtonGroup
                     buttons={['lb', 'kg']}
                     selectedIndex={activeIndex}
                     setSelectedIndex={setActiveIndex}
                  />
               </View>
            </View>
            <View style={[global.rowCenter]}>
               <View
                  style={{ flex: 1, alignItems: 'center', paddingVertical: 20 }}
               >
                  <CustomText h2={true} humanText='Training Max %: ' />
               </View>
               <View style={{ flex: 1, alignItems: 'flex-start' }}>
                  <CustomNumberInput
                     placeholder={'90%'}
                     secureTextEntry={false}
                     keyboardType={'number-pad'}
                     rightLabelVal={'%'}
                     value={`${trainingMaxPercentage}`}
                     textAlign='center'
                     setVal={setTrainingMaxPercentage}
                  />
               </View>
            </View>
            {exercises.map((exercise) => (
               <ExerciseCalculatorInput
                  key={exercise}
                  trainingMaxPercentage={trainingMaxPercentage}
                  exercise={exercise}
                  activeIndex={activeIndex}
               />
            ))}
            <Button onPress={handleSaveInitial}>Save</Button>
         </ScrollView>
      </KeyboardAvoidingView>
   );
};
