import { Icon, Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { Goals } from '../../../types/types';
import { global } from '../../style/global.styles';
import { makeMacroNurientStyles } from './makeMacroNutrientStyles';

interface Props {
   goals: Goals;
}

export const MacroNutrientList = ({ goals }: Props) => {
   const { theme } = useTheme();
   const { total_fat, total_carbohydrates, total_protein } = goals;
   const macronutrients = [total_carbohydrates, total_fat, total_protein];
   const nutrientNames = ['Carbs', 'Fat', 'Protein'];
   const macronutrientStyles = makeMacroNurientStyles(theme.colors);
   const styleColors = [
      theme.colors.primary,
      theme.colors.secondary,
      theme.colors.tertiary,
   ];
   return (
      <View style={global.containerCenter}>
         {macronutrients.map((macronutrient, index) => (
            <View
               style={[macronutrientStyles.row, global.gap]}
               key={macronutrient}
            >
               <View style={macronutrientStyles.icon}>
                  <Icon
                     size={15}
                     name='square'
                     type='font-awesome'
                     color={styleColors[index]}
                  />
               </View>
               <View style={macronutrientStyles.textContainer}>
                  <Text
                     style={[
                        macronutrientStyles.text,
                        macronutrientStyles.macroTitle,
                     ]}
                  >
                     {nutrientNames[index]}
                  </Text>
                  <Text style={[global.textBold, macronutrientStyles.text]}>
                     {macronutrient} g
                  </Text>
               </View>
            </View>
         ))}
      </View>
   );
};
