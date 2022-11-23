import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { AuthenticatedTabsParamList } from '../../../../types/types';
import { NutritionPieChart } from '../../../components/nutrition-pie-chart/NutritionPieChart';
import { useAppSelector } from '../../../redux/hooks/reduxHooks';
import { selectGoals } from '../../../redux/reducers/goalsReducer';
import { global } from '../../../style/global.styles';
import { GeneralProgressSquare } from './general-progress-square/GeneralProgressSquare';
import { makeHomeStyles } from './makeHomeStyles';
type Props = NativeStackScreenProps<AuthenticatedTabsParamList, 'Home'>;

const goal = {
   total_carbohydrates: 200,
   total_protein: 200,
   total_fat: 200,
   total_calories: 2000,
};

export const Home = ({ navigation }: Props) => {
   const { theme } = useTheme();
   const homeStyles = makeHomeStyles(theme.colors);
   //todo use goals instead of above goal
   const goals = useAppSelector(selectGoals);

   //TODO replace with data from api
   const progressData = [
      {
         title: 'Calories Eaten',
         iconName: 'pizza',
         iconType: 'material-community',
         amount: 538,
         goal: 2000,
         metric: 'kcal',
         color: theme.colors.primary,
      },
      {
         title: 'Calories Burned',
         iconName: 'fire',
         iconType: 'material-community',
         amount: 200,
         goal: 250,
         metric: 'kcal',
         color: theme.colors.secondary,
      },
      {
         title: 'Water Drank',
         iconName: 'cup-water',
         iconType: 'material-community',
         amount: 6,
         goal: 8,
         metric: 'cups',
         color: theme.colors.tertiary,
      },
      {
         title: 'Steps Completed',
         iconName: 'shoe-sneaker',
         iconType: 'material-community',
         amount: 644,
         goal: 10000,
         metric: 'steps',
         color: theme.colors.primary,
      },
   ];

   return (
      <View style={global.screenEven}>
         <View style={[homeStyles.nutritionContainer, global.containerBorder]}>
            <NutritionPieChart goals={goal} />
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
