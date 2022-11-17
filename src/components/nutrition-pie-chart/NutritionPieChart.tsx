import { useTheme } from '@rneui/themed';
import { View } from 'react-native';
import Svg from 'react-native-svg';
import { VictoryLabel, VictoryPie } from 'victory-native';
import { Goals } from '../../../types/types';
import { global } from '../../style/global.styles';
interface Props {
   goals: Goals;
}

export const NutritionPieChart = ({ goals }: Props) => {
   const { theme } = useTheme();
   return (
      <View style={global.containerCenter}>
         <Svg height={200} width={200}>
            <VictoryPie
               standalone={false}
               padAngle={3}
               width={200}
               labels={() => null}
               height={200}
               colorScale={[
                  theme.colors.primary,
                  theme.colors.secondary,
                  theme.colors.tertiary,
               ]}
               data={[
                  {
                     x: goals.total_carbohydrates,
                     y:
                        ((goals.total_carbohydrates * 4) /
                           goals.total_calories) *
                        100,
                  },
                  {
                     x: goals.total_fat,
                     y: ((goals.total_fat * 9) / goals.total_calories) * 100,
                  },
                  {
                     x: goals.total_protein,
                     y:
                        ((goals.total_protein * 4) / goals.total_calories) *
                        100,
                  },
               ]}
               innerRadius={68}
               labelRadius={100}
               radius={80}
               style={{ labels: { fontSize: 20, fill: 'white' } }}
            />
            <VictoryLabel
               textAnchor='middle'
               style={{ fontSize: 16, fill: theme.colors.black }}
               x={100}
               y={100}
               text={`${goals.total_calories} calories`}
            />
         </Svg>
      </View>
   );
};
