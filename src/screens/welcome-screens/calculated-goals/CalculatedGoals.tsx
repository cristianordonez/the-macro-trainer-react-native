import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@rneui/themed';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { WelcomeStackParamList } from '../../../../types/types';
import { LoadingImage } from '../../../components/loading-image/LoadingImage';
import { NutritionPieChart } from '../../../components/nutrition-pie-chart/NutritionPieChart';
import { WeightChart } from '../../../components/weight-chart/WeightChart';
import { useAppSelector } from '../../../redux/hooks/reduxHooks';
import { selectGoals } from '../../../redux/reducers/userGoalsReducer';
import { selectUserMetrics } from '../../../redux/reducers/userMetricsReducer';
import { global } from '../../../style/global.styles';
import { createChartData } from '../../../utils/createChartData';
import { calculatedGoalsStyles } from './styles';

type Props = NativeStackScreenProps<WelcomeStackParamList, 'CalculatedGoals'>;

export const CalculatedGoals = ({ navigation }: Props) => {
   const userState = useAppSelector(selectUserMetrics);
   const goalState = useAppSelector(selectGoals);

   const handlePress = () => {
      navigation.navigate('CompleteRegistration');
   };

   useEffect(() => {
      goalState.status === 'succeeded'
         ? navigation.setOptions({ headerShown: true })
         : navigation.setOptions({ headerShown: false });
   }, [goalState.status]);

   const data = createChartData(
      userState.weight,
      userState.weightMetric,
      userState.goal
   );

   if (goalState.status === 'succeeded') {
      return (
         <View style={[global.screenEnd]}>
            <>
               <View style={[calculatedGoalsStyles.goalWeights, { flex: 1 }]}>
                  <View style={calculatedGoalsStyles.weightCol}>
                     <Text
                        style={[calculatedGoalsStyles.textWeight, global.gap]}
                     >
                        {data[0].weight}
                     </Text>
                     <Text style={calculatedGoalsStyles.textTitle}>Start</Text>
                  </View>
                  <View style={calculatedGoalsStyles.weightCol}>
                     <Text
                        style={[calculatedGoalsStyles.textWeight, global.gap]}
                     >
                        {data[data.length - 1].weight}
                     </Text>
                     <Text style={calculatedGoalsStyles.textTitle}>
                        Expected
                     </Text>
                  </View>
               </View>
               <View style={{ flex: 6 }}>
                  <WeightChart data={data} title='3 Month Goal' />
               </View>
               <View style={[{ flex: 8 }]}>
                  <NutritionPieChart goals={goalState} showPercentage={false} />
               </View>
               <Button
                  onPress={handlePress}
                  title={`Continue to complete creating account`}
                  size='lg'
               />
            </>
         </View>
      );
   } else {
      return (
         <View style={[global.screenCenter, { paddingBottom: 0 }]}>
            <LoadingImage />
            <Text h4 style={global.textCenter}>
               Calculating your Nutritional Needs
            </Text>
         </View>
      );
   }
};
