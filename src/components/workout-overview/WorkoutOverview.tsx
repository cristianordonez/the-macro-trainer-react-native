import { Button, Divider, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { Workout } from '../../../types/types';
import { global } from '../../style/global.styles';
import { capitalizeExerciseName } from '../../utils/capitalizeExerciseName';
import { CustomText } from '../custom-text/CustomText';
import { makeWorkoutDayStyles } from './makeWorkoutOverviewStyles';

const titleCol = ['Exercise', 'Reps', 'Weight'];

export const WorkoutOverview = ({ day, week, id, exercises }: Workout) => {
   const { theme } = useTheme();
   const styles = makeWorkoutDayStyles(theme.colors);
   console.log('exercises: ', exercises[0]);
   return (
      <View
         style={[
            global.containerBorder,
            global.largeContainer,
            styles.container,
         ]}
      >
         <View style={[styles.titleRow, global.gap]}>
            {day === 1 ? (
               <CustomText
                  h1={true}
                  fontFamily='Lato_Bold'
                  humanText={`Start new workout`}
                  color={'primary'}
               />
            ) : (
               <CustomText
                  h1={true}
                  fontFamily='Lato_Bold'
                  humanText={`Upcoming workout`}
                  color={'primary'}
               />
            )}
            <CustomText h2={true} humanText={`Day ${day}`} />
         </View>
         <View style={styles.rowsContainer}>
            <View style={styles.row}>
               {titleCol.map((title) => (
                  <View style={styles.column} key={title}>
                     <CustomText h2={true} humanText={title} />
                  </View>
               ))}
            </View>
            <Divider
               style={styles.dividerStyle}
               color={theme.colors.background}
               width={2}
            />
            {exercises.map((exercise) => (
               <View style={styles.row} key={exercise.id}>
                  <View style={styles.column}>
                     <CustomText
                        humanText={capitalizeExerciseName(exercise.name)}
                     />
                  </View>
                  <View style={styles.column}>
                     {exercise.sets.map((set) => (
                        <CustomText
                           humanText={
                              set.amrap
                                 ? `${set.reps_target}+`
                                 : `${set.reps_target}`
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
            ))}
         </View>
         <Button
            onPress={() => console.log('btn was pressed')}
            title='Add Exercise'
            type='clear'
            size='lg'
         />
      </View>
   );
};
