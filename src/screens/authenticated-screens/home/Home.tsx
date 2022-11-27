import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Tab, TabView, useTheme } from '@rneui/themed';
import { useState } from 'react';
import { View } from 'react-native';
import {
   AuthenticatedTabsParamList,
   DailyNutritionSummary,
   Goals,
} from '../../../../types/types';
import { NutritionPieChart } from '../../../components/nutrition-pie-chart/NutritionPieChart';
import { useAppSelector } from '../../../redux/hooks/reduxHooks';
import { selectGoals } from '../../../redux/reducers/userGoalsReducer';
import { global } from '../../../style/global.styles';
import { GeneralProgressSquare } from './general-progress-square/GeneralProgressSquare';
import { makeHomeStyles } from './makeHomeStyles';
import { TotalNutritionCalorieSection } from './total-nutrition-calorie-section';

//todo replace with goals from redux state
const goal: Goals = {
   total_carbohydrates: 200,
   total_protein: 200,
   total_fat: 44,
   total_calories: 2000,
   water: 8,
   steps: 10000,
   calories_burned: 250,
};

//todo replace this with nutrition for currently selected day
const dailyNutritionSummary: DailyNutritionSummary = {
   total_carbohydrates: 10,
   total_fat: 10,
   total_protein: 10,
   total_calories: 1000,
};

type Props = NativeStackScreenProps<AuthenticatedTabsParamList, 'Home'>;

export const Home = ({ navigation }: Props) => {
   const { theme } = useTheme();
   const homeStyles = makeHomeStyles(theme.colors);
   //todo use these goals instead of above goal
   const goals = useAppSelector(selectGoals);

   const colors = [
      theme.colors.primary,
      theme.colors.secondary,
      theme.colors.tertiary,
      theme.colors.link,
   ];

   //TODO replace with data from personal api
   const progressData = [
      {
         title: 'Calories Eaten',
         iconName: 'pizza',
         iconType: 'material-community',
         amount: 538,
         goal: 2000,
         metric: 'kcal',
         color: colors[0],
      },
      {
         title: 'Calories Burned',
         iconName: 'fire',
         iconType: 'material-community',
         amount: 200,
         goal: 250,
         metric: 'kcal',
         color: colors[1],
      },
      {
         title: 'Water Drank',
         iconName: 'cup-water',
         iconType: 'material-community',
         amount: 6,
         goal: 8,
         metric: 'cups',
         color: colors[2],
      },
      {
         title: 'Steps Completed',
         iconName: 'shoe-sneaker',
         iconType: 'material-community',
         amount: 644,
         goal: 10000,
         metric: 'steps',
         color: colors[3],
      },
   ];

   const [index, setIndex] = useState<number>(0);

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
                        goals={goal}
                        dailyNutritionSummary={dailyNutritionSummary}
                     />
                  </TabView.Item>
                  <TabView.Item style={homeStyles.tabViewItem}>
                     <NutritionPieChart goals={goal} showPercentage={true} />
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
