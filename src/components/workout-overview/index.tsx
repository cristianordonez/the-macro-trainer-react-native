import { Button, Divider, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { Workout } from '../../../types/types';
import { global } from '../../style/global.styles';
import { CustomText } from '../custom-text/CustomText';
import { ExerciseRow } from './ExerciseRow';
import { makeWorkoutDayStyles } from './makeWorkoutOverviewStyles';

const titleCol = ['Exercise', 'Reps', 'Weight (lbs)'];

export const WorkoutOverview = ({ day, week, id, exercises }: Workout) => {
   const { theme } = useTheme();
   const styles = makeWorkoutDayStyles(theme.colors);
   console.log('exercises: ', exercises);
   //todo move row on bottom to seperate component so that I can use correct appselector within it using id of exercise
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
               <ExerciseRow exercise={exercise} key={exercise.id} />
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
