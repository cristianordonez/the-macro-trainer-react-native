import { LinearProgress, Text, useTheme } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import { Goals, MacroMap } from '../../../../../types/types';
import { CircularProgress } from '../../../../components/circular-progress/CircularProgress';
import { global } from '../../../../style/global.styles';
import { convertMacroKey } from '../../../../utils/convertMacroKey';
import { styles } from './styles';

interface Props {
   colors: string[];
   goals: Goals;
   dailyNutritionSummary: Goals;
}
export const TotalNutritionCalorieSection = ({
   colors,
   goals,
   dailyNutritionSummary,
}: Props) => {
   const { theme } = useTheme();

   return (
      <>
         <View style={styles.outercontainer}>
            <View style={styles.circularProgressContainer}>
               <CircularProgress
                  size={150}
                  color={theme.colors.primary}
                  progress={0.5}
                  amount={200}
                  metric={'kcal'}
                  isCaloriesRemaining={true}
               />
            </View>
            <View style={styles.linearProgressContainer}>
               {Object.keys(goals).map((key, index) =>
                  key !== 'total_calories' ? (
                     <React.Fragment key={key}>
                        <Text
                           style={[global.textBold, styles.linearProgressText]}
                        >
                           {convertMacroKey(key as keyof MacroMap)}
                        </Text>
                        <LinearProgress
                           key={key}
                           style={[
                              styles.linearProgress,
                              global.containerBorder,
                           ]}
                           value={0.5}
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
                           {dailyNutritionSummary[key as keyof Goals]} /{' '}
                           {goals[key as keyof Goals]}g
                        </Text>
                     </React.Fragment>
                  ) : null
               )}
            </View>
         </View>
      </>
   );
};
