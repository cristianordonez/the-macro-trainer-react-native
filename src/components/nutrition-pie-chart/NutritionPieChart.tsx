import { useTheme } from '@rneui/themed';
import Svg from 'react-native-svg';
import { VictoryLabel, VictoryLegend, VictoryPie } from 'victory-native';
import { Goals } from '../../../types/types';

interface Props {
   goals: Goals;
}

export const NutritionPieChart = ({ goals }: Props) => {
   const { theme } = useTheme();

   const data = [
      {
         x: `${goals.total_carbohydrates}g`,
         y: ((goals.total_carbohydrates * 4) / goals.total_calories) * 100,
      },
      {
         x: `${goals.total_fat}g`,
         y: ((goals.total_fat * 9) / goals.total_calories) * 100,
      },
      {
         x: `${goals.total_protein}g`,
         y: ((goals.total_protein * 4) / goals.total_calories) * 100,
      },
   ];

   const colorScale = [
      theme.colors.primary,
      theme.colors.secondary,
      theme.colors.tertiary,
   ];
   return (
      // <View style={global.containerCenter}>
      <Svg height={200} width={200}>
         <VictoryPie
            standalone={false}
            padAngle={3}
            width={200}
            height={200}
            colorScale={colorScale}
            data={data}
            innerRadius={50}
            radius={55}
            labelRadius={70}
            labels={({ datum }) => datum.x}
            style={{ labels: { fontSize: 18, fill: theme.colors.black } }}
         />
         <VictoryLabel
            textAnchor='middle'
            style={{
               fontSize: 16,
               fill: theme.colors.black,
               fontWeight: 'bold',
            }}
            x={100}
            y={100}
            text={`${goals.total_calories} kcal`}
         />
         <VictoryLegend
            x={0}
            y={200}
            centerTitle
            orientation='horizontal'
            gutter={20}
            colorScale={colorScale}
            style={{
               border: { stroke: 'none' },
               labels: { fill: theme.colors.black },
            }}
            data={[{ name: `Carbs` }, { name: 'Protein ' }, { name: 'Fat' }]}
         />
      </Svg>
      // </View>
   );
};
