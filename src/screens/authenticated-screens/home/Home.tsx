import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { AuthenticatedTabsParamList } from '../../../../types/types';
import { global } from '../../../style/global.styles';
import { GeneralProgressSquare } from './general-progress-square/GeneralProgressSquare';
import { makeHomeStyles } from './makeHomeStyles';
type Props = NativeStackScreenProps<AuthenticatedTabsParamList, 'Home'>;

const progressData = [
   {
      title: 'Calories Eaten',
      iconName: 'user',
      iconType: 'feather',
      amount: 538,
      goal: 2000,
      metric: 'kcal',
   },
   {
      title: 'Calories Burned',
      iconName: 'user',
      iconType: 'feather',
      amount: 200,
      goal: 250,
      metric: 'kcal',
   },
   {
      title: 'Water Drank',
      iconName: 'user',
      iconType: 'feather',
      amount: 6,
      goal: 8,
      metric: 'cups',
   },
   {
      title: 'Steps Completed',
      iconName: 'user',
      iconType: 'feather',
      amount: 644,
      goal: 10000,
      metric: 'steps',
   },
];
export const Home = ({ navigation }: Props) => {
   const { theme } = useTheme();
   const homeStyles = makeHomeStyles(theme.colors);
   return (
      <View style={global.screenEven}>
         <View
            style={[homeStyles.nutritionContainer, global.containerBorder]}
         ></View>
         <View style={homeStyles.generalProgressContainer}>
            {progressData.map((item) => (
               <GeneralProgressSquare
                  title={item.title}
                  iconName={item.iconName}
                  iconType={item.iconType}
                  amount={item.amount}
                  goal={item.goal}
                  metric={item.metric}
               />
            ))}
         </View>
      </View>
   );
};
