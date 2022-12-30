import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native';
import { CurrentWorkoutStackType } from '../../../../../../types/types';
import { WorkoutOverview } from '../../../../../components/workout-overview/WorkoutOverview';
import { useAppSelector } from '../../../../../redux/hooks/reduxHooks';
import { getProgramByUserSelectedId } from '../../../../../redux/reducers/weightLiftingReducer';
import { global } from '../../../../../style/global.styles';

type Props = NativeStackScreenProps<CurrentWorkoutStackType, 'Overview'>;

export const Overview = ({ navigation }: Props) => {
   const program = useAppSelector(getProgramByUserSelectedId);

   return (
      <ScrollView contentContainerStyle={global.scrollableContainer}>
         {program[0].workouts.map((workout) => (
            <WorkoutOverview
               day={workout.day}
               week={workout.week}
               id={workout.id}
               exercises={workout.exercises}
               key={workout.id}
            />
         ))}
      </ScrollView>
   );
};
