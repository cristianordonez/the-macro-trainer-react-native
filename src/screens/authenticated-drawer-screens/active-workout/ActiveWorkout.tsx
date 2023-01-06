import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { CurrentWorkoutStackType } from '../../../../types/types';
import { ActiveWorkoutExercise } from '../../../components/active-workout-exercise/ActiveWorkoutExercise';
import { WorkoutTimer } from '../../../components/workout-timer/WorkoutTimer';
import { useAppSelector } from '../../../redux/hooks/reduxHooks';
import { getWorkoutFromId } from '../../../redux/reducers/weightLiftingReducer';
import { global } from '../../../style/global.styles';

type Props = NativeStackScreenProps<CurrentWorkoutStackType, 'ActiveWorkout'>;

export const ActiveWorkout = ({ navigation, route }: Props) => {
   const { id } = route.params;
   const workout = useAppSelector((state) => {
      return getWorkoutFromId(state, id);
   });

   useEffect(() => {
      navigation.setOptions({
         headerTitle: `Day ${workout?.day || 1}`,
      });
   }, [id]);

   //todo move time in seconds to global state (seperate redux slice) so that it continues
   return (
      <KeyboardAvoidingView
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
         enabled
         keyboardVerticalOffset={100}
      >
         <ScrollView contentContainerStyle={global.scrollableContainer}>
            <View>
               <WorkoutTimer />
               {workout?.exercises.map((exercise) => (
                  <ActiveWorkoutExercise
                     key={exercise.id}
                     id={exercise.id}
                     gif_url={exercise.gif_url}
                     name={exercise.name}
                     sets={exercise.sets}
                  />
               ))}
            </View>
         </ScrollView>
      </KeyboardAvoidingView>
   );
};
