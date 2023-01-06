import { Divider, Icon, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { ExerciseForWorkout } from '../../../types/types';
import { useAppSelector } from '../../redux/hooks/reduxHooks';
import { getExerciseRepMaxFromId } from '../../redux/reducers/weightLiftingReducer';
import { global } from '../../style/global.styles';
import { capitalizeExerciseName } from '../../utils/capitalizeExerciseName';
import { CustomText } from '../custom-text/CustomText';
import { LargeContainer } from '../large-container/LargeContainer';
import { activeWorkoutExerciseStyles } from './activeWorkoutExerciseStyles';
import { SetRow } from './SetRow';

export const ActiveWorkoutExercise = ({
   id,
   sets,
   name,
   gif_url,
}: ExerciseForWorkout) => {
   const { theme } = useTheme();
   const styles = activeWorkoutExerciseStyles(theme.colors);

   const columnHeaders = ['Set', 'lbs', 'Reps'];

   const repMax = useAppSelector((state) => {
      return getExerciseRepMaxFromId(state, id);
   });

   return (
      <LargeContainer>
         <View style={[styles.row, global.gap]}>
            <CustomText
               humanText={`${capitalizeExerciseName(name)}`}
               color='primary'
               h2={true}
               fontFamily='Lato_Bold'
            />
            <Icon name='line-graph' type='entypo' size={20} />
         </View>
         <Divider style={styles.dividerGap} />
         <View style={[styles.tableRow, global.gap]}>
            {columnHeaders.map((header) =>
               typeof header === 'string' ? (
                  <View style={styles.tableCell}>
                     <CustomText
                        humanText={`${header}`}
                        h2={true}
                        fontFamily='Lato_Bold'
                     />
                  </View>
               ) : (
                  <View style={styles.tableCell}>{header}</View>
               )
            )}
         </View>
         <View>
            {sets.map((set) => (
               <SetRow
                  key={set.id}
                  amrap={set.amrap}
                  percentage_rm={set.percentage_rm}
                  reps_target={set.reps_target}
                  set_number={set.set_number}
                  id={set.id}
                  repMax={repMax}
               />
            ))}
         </View>
      </LargeContainer>
   );
};
