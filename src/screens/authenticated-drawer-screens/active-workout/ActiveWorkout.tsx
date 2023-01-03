import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { CurrentWorkoutStackType } from '../../../../types/types';
import { WorkoutTimer } from '../../../components/workout-timer/WorkoutTimer';
import { useAppSelector } from '../../../redux/hooks/reduxHooks';
import { getWorkoutFromId } from '../../../redux/reducers/weightLiftingReducer';

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

   return (
      <ScrollView>
         <WorkoutTimer />
      </ScrollView>
   );
};
