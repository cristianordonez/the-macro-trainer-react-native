import { LinearProgress, useTheme } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import { DailyNutritionSummary, Goals, MacroMap } from '../../../types/types';
import { global } from '../../style/global.styles';
import { convertMacroKey } from '../../utils/convertMacroKey';
import { CircularProgress } from '../circular-progress/CircularProgress';
import { CustomText } from '../custom-text/CustomText';
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
                     <View
                        style={{
                           flexDirection: 'row',
                           alignItems: 'flex-end',
                           justifyContent: 'space-evenly',
                           width: '100%',
                           flex: 1,
                           paddingBottom: 5,
                        }}
                     >
                        <CustomText
                           humanText={convertMacroKey(key as keyof MacroMap)}
                           h3={true}
                           fontFamily='Lato_Bold'
                        />
                        <CustomText
                           h3={true}
                           textAlign='left'
                           opacity={true}
                           humanText={`${
                              dailyNutritionSummary[
                                 key as keyof DailyNutritionSummary
                              ]
                           } / ${goals[key as keyof Goals]}g`}
                        />
                     </View>
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
                  </React.Fragment>
               ))}
            </View>
         </View>
      </>
   );
};
