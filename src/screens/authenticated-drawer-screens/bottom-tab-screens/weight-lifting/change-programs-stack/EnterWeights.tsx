import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from '@rneui/themed';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { ChangeProgramsStackType } from '../../../../../../types/types';
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
   console.log('exercises: ', exercises);

   //todo create global style for scroll view
   return (
      <ScrollView contentContainerStyle={global.scrollableContainer}>
         <View style={[global.rowCenter]}>
            <View
               style={{ flex: 2, alignItems: 'center', paddingVertical: 20 }}
            >
               <Text h4>Enter training maxes </Text>
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
   );
};
