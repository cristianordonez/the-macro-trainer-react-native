import { Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { Workout } from '../../../types/types';
import { global } from '../../style/global.styles';
import { SetsRow } from './sets-row/SetsRow';
import { makeWorkoutDayStyles } from './styles';

export const WorkoutDayDescription = ({ day, exercises }: Workout) => {
   const { theme } = useTheme();
   const workoutDayStyles = makeWorkoutDayStyles(theme.colors);

   return (
      <View style={[workoutDayStyles.container, global.containerBorder]}>
         <View style={workoutDayStyles.dayText}>
            <Text style={[global.textBold]}>Day {day}</Text>
         </View>
         {exercises.map((exercise) => (
            <>
               <View
                  style={[workoutDayStyles.exerciseRowContainer, global.gap]}
                  key={exercise.exercise_id}
               >
                  <View style={workoutDayStyles.exerciseNameContainer}>
                     <Text style={workoutDayStyles.text}>{exercise.name}</Text>
                  </View>
                  <View style={workoutDayStyles.setsContainer}>
                     <SetsRow sets={exercise.sets} />
                  </View>
               </View>
            </>
         ))}
      </View>
   );
};
