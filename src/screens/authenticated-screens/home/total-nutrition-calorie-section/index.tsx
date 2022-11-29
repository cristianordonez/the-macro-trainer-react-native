import { LinearProgress, Text, useTheme } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import {
   DailyNutritionSummary,
   Goals,
   MacroMap,
} from '../../../../../types/types';
import { CircularProgress } from '../../../../components/circular-progress/CircularProgress';
import { global } from '../../../../style/global.styles';
import { convertMacroKey } from '../../../../utils/convertMacroKey';
import { styles } from './styles';

interface Props {
   colors: string[];
   goals: Goals;
   dailyNutritionSummary: DailyNutritionSummary;
}
export const TotalNutritionCalorieSection = ({
   colors,
   goals,
   dailyNutritionSummary,
}: Props) => {
   const { theme } = useTheme();
   const { total_calories, total_carbohydrates, total_fat, total_protein } =
      goals;
   const mainNutritionGoals = { total_carbohydrates, total_fat, total_protein };

   const caloriesEaten = dailyNutritionSummary.total_calories;
   const caloriesRemaining = total_calories - caloriesEaten;
   const progress = 1 - caloriesEaten / total_calories;

   return (
      <>
         <View style={styles.outercontainer}>
            <View style={styles.circularProgressContainer}>
               <CircularProgress
                  size={150}
                  color={theme.colors.primary}
                  progress={progress < 0 ? 0 : progress}
                  amount={caloriesRemaining < 0 ? 0 : caloriesRemaining}
                  metric={'kcal'}
                  isCaloriesRemaining={true}
               />
            </View>
            <View style={styles.linearProgressContainer}>
               {Object.keys(mainNutritionGoals).map((key, index) => (
                  <React.Fragment key={key}>
                     <Text style={[global.textBold, styles.linearProgressText]}>
                        {convertMacroKey(key as keyof MacroMap)}
                     </Text>
                     <LinearProgress
                        key={key}
                        style={[styles.linearProgress, global.containerBorder]}
                        value={Number(
                           dailyNutritionSummary[
                              key as keyof DailyNutritionSummary
                           ] / Number(goals[key as keyof Goals])
                        )}
                        animation={false}
                        variant='determinate'
                        color={colors[index]}
                        trackColor={theme.colors.background}
                     />
                     <Text
                        style={[
                           global.textOpacity,
                           styles.linearProgressText,
                           styles.linearProgressSubtitle,
                           global.gap,
                        ]}
                     >
                        {
                           dailyNutritionSummary[
                              key as keyof DailyNutritionSummary
                           ]
                        }{' '}
                        / {goals[key as keyof Goals]}g
                     </Text>
                  </React.Fragment>
               ))}
            </View>
         </View>
      </>
   );
};
