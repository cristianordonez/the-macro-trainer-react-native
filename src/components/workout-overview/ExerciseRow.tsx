import { useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { ExerciseForWorkout } from '../../../types/types';
import { useAppSelector } from '../../redux/hooks/reduxHooks';
import { getExerciseRepMaxFromId } from '../../redux/reducers/weightLiftingReducer';
import { capitalizeExerciseName } from '../../utils/capitalizeExerciseName';
import { CustomText } from '../custom-text/CustomText';
import { makeWorkoutDayStyles } from './makeWorkoutOverviewStyles';

interface Props {
   exercise: ExerciseForWorkout;
}

export const ExerciseRow = ({ exercise }: Props) => {
   const { theme } = useTheme();
   const styles = makeWorkoutDayStyles(theme.colors);

   const max = useAppSelector((state) => {
      getExerciseRepMaxFromId(state, exercise.id);
   });
   console.log('max in exercise row : ', max);
   return (
      <View style={styles.row} key={exercise.id}>
         <View style={styles.column}>
            <CustomText humanText={capitalizeExerciseName(exercise.name)} />
         </View>
         <View style={styles.column}>
            {exercise.sets.map((set) => (
               <CustomText
                  humanText={
                     set.amrap ? `${set.reps_target}+` : `${set.reps_target}`
                  }
               />
            ))}
         </View>
         <View style={styles.column}>
            {exercise.sets.map((set) => (
               <CustomText humanText={`${set.percentage_rm}`} />
            ))}
         </View>
      </View>
   );
};
