import { useTheme } from '@rneui/themed';
import { View } from 'react-native';
import {
   VictoryAxis,
   VictoryChart,
   VictoryLabel,
   VictoryPie,
} from 'victory-native';
import { Goals } from '../../../types/types';
import { global } from '../../style/global.styles';
interface Props {
   goals: Goals;
}

export const NutritionPieChart = ({ goals }: Props) => {
   const { theme } = useTheme();
   console.log('goals: ', goals);
   return (
      <View style={global.containerCenter}>
         <VictoryChart width={400} height={400} padding={0}>
            <VictoryAxis
               style={{
                  axis: { stroke: 'transparent' },
                  ticks: { stroke: 'transparent' },
                  tickLabels: { fill: 'transparent' },
               }}
            />
            <VictoryAxis
               style={{
                  axis: { stroke: 'transparent' },
                  ticks: { stroke: 'transparent' },
                  tickLabels: { fill: 'transparent' },
               }}
            />
            <VictoryPie
               standalone={false}
               colorScale={['green', 'yellow', 'purple']}
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
               radius={80}
               innerRadius={65}
               padAngle={3}
               labels={() => null}
               labelRadius={60}
               style={{ labels: { fontSize: 12, fill: theme.colors.black } }}
            />
            <VictoryLabel
               textAnchor='middle'
               style={{ fontSize: 20, fill: theme.colors.black }}
               x={200}
               y={200}
               text={`${goals.total_calories} calories`}
            />
         </VictoryChart>
      </View>
   );
};
