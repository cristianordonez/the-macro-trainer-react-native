import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@rneui/themed';
import { ScrollView, View } from 'react-native';
import { ChangeProgramsStackType } from '../../../../../../types/types';
import { WorkoutDayDescription } from '../../../../../components/workout-day-description/WorkoutDayDescription';
import { useAppSelector } from '../../../../../redux/hooks/reduxHooks';
import { selectProgramByName } from '../../../../../redux/reducers/weightLiftingReducer';
import { global } from '../../../../../style/global.styles';

type Props = NativeStackScreenProps<
   ChangeProgramsStackType,
   'ProgramDescription'
>;

export const ProgramDescription = ({ route, navigation }: Props) => {
   const programName = route.params.programName;

   const program = useAppSelector((state) =>
      selectProgramByName(state, programName)
   );
   const currentProgram = program[0];

   const handlePress = () => {
      navigation.navigate('EnterWeights', {
         programName,
      });
   };

   return (
      <>
         <ScrollView contentContainerStyle={global.scrollableContainer}>
            <Text style={[global.gap, global.textMedium]}>
               {currentProgram.body}
            </Text>
            {currentProgram.progression.map((item) => (
               <View style={global.rowCenter} key={item.id}>
                  <Text style={global.textMedium}>
                     {'\u2022' + ' '} {item.description}
                  </Text>
               </View>
            ))}
            {currentProgram.workouts.map((workout, index) => (
               <WorkoutDayDescription
                  workout_id={workout.workout_id}
                  key={workout.workout_id}
                  exercises={workout.exercises}
                  day={workout.day}
               />
            ))}
            <Button onPress={handlePress}>Enter weights and start</Button>
         </ScrollView>
      </>
   );
};
