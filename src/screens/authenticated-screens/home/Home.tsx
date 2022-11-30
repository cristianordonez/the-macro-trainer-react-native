import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Tab, TabView, useTheme } from '@rneui/themed';
import { useState } from 'react';
import { View } from 'react-native';
import { AuthenticatedTabsParamList } from '../../../../types/types';
import { NutritionPieChart } from '../../../components/nutrition-pie-chart/NutritionPieChart';
import { useAppSelector } from '../../../redux/hooks/reduxHooks';
import { selectNutritionSummaryToday } from '../../../redux/reducers/foodLogReducer';
import { selectGoals } from '../../../redux/reducers/userGoalsReducer';
import { selectUserMetrics } from '../../../redux/reducers/userMetricsReducer';
import { global } from '../../../style/global.styles';
import { GeneralProgressSquare } from './general-progress-square/GeneralProgressSquare';
import { makeHomeStyles } from './makeHomeStyles';
import { TotalNutritionCalorieSection } from './total-nutrition-calorie-section';

type Props = NativeStackScreenProps<AuthenticatedTabsParamList, 'Home'>;

export const Home = ({ navigation }: Props) => {
   const { theme } = useTheme();
   const homeStyles = makeHomeStyles(theme.colors);
   const goals = useAppSelector(selectGoals);
   const metrics = useAppSelector(selectUserMetrics);
   const nutritionSummary = useAppSelector(selectNutritionSummaryToday);

   const colors = [
      theme.colors.primary,
      theme.colors.secondary,
      theme.colors.tertiary,
      theme.colors.link,
   ];

   const [index, setIndex] = useState<number>(0);

   const progressData = [
      {
         title: 'Calories Eaten',
         iconName: 'pizza',
         iconType: 'material-community',
         amount: nutritionSummary.total_calories,
         goal: goals.total_calories,
         metric: 'kcal',
         color: colors[0],
      },
      {
         title: 'Calories Burned',
         iconName: 'fire',
         iconType: 'material-community',
         amount: 200, //TODO: replace with exercise data
         goal: goals.calories_to_burn,
         metric: 'kcal',
         color: colors[1],
      },
      {
         title: 'Water Drank',
         iconName: 'cup-water',
         iconType: 'material-community',
         amount: 6, //TODO: replace with food log data
         goal: goals.water,
         metric: 'cups',
         color: colors[2],
      },
      {
         title: 'Steps Completed',
         iconName: 'shoe-sneaker',
         iconType: 'material-community',
         amount: 644, //TODO: replace with exercise data
         goal: goals.steps,
         metric: 'steps',
         color: colors[3],
      },
   ];

   return (
      <View style={global.screenEven}>
         <View style={[homeStyles.nutritionContainer, global.containerBorder]}>
            <View style={[homeStyles.tabsContainer]}>
               <Tab
                  value={index}
                  onChange={setIndex}
                  indicatorStyle={{
                     display: 'none',
                  }}
               >
                  <Tab.Item
                     containerStyle={(active: boolean) => ({
                        backgroundColor: active
                           ? theme.colors.primary
                           : theme.colors.searchBg,
                        borderTopLeftRadius: 25,
                        borderBottomLeftRadius: 25,
                        borderWidth: 1,
                        borderColor: theme.colors.white,
                        height: '100%',
                     })}
                     buttonStyle={{ paddingVertical: 5 }}
                     title='Total'
                     titleStyle={homeStyles.tabItemTitle}
                  />
                  <Tab.Item
                     containerStyle={(active: boolean) => ({
                        backgroundColor: active
                           ? theme.colors.primary
                           : theme.colors.searchBg,
                        borderTopRightRadius: 25,
                        borderBottomRightRadius: 25,
                        borderWidth: 1,
                        borderColor: theme.colors.white,
                        height: '100%',
                     })}
                     buttonStyle={{ paddingVertical: 5 }}
                     title='Percentage'
                     titleStyle={homeStyles.tabItemTitle}
                  />
               </Tab>
            </View>
            <View style={homeStyles.tabContentsContainer}>
               <TabView
                  value={index}
                  onChange={setIndex}
                  animationType='spring'
               >
                  <TabView.Item style={homeStyles.tabViewItem}>
                     <TotalNutritionCalorieSection
                        colors={colors}
                        goals={goals}
                        dailyNutritionSummary={nutritionSummary}
                     />
                  </TabView.Item>
                  <TabView.Item style={homeStyles.tabViewItem}>
                     <NutritionPieChart goals={goals} showPercentage={true} />
                  </TabView.Item>
               </TabView>
            </View>
         </View>
         <View style={homeStyles.generalProgressContainer}>
            {progressData.map((item) => (
               <GeneralProgressSquare
                  title={item.title}
                  key={item.title}
                  iconName={item.iconName}
                  iconType={item.iconType}
                  amount={item.amount}
                  goal={item.goal}
                  metric={item.metric}
                  color={item.color}
               />
            ))}
         </View>
      </View>
   );
};
