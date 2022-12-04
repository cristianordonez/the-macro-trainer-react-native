import { useTheme } from '@rneui/themed';
import {
   VictoryAxis,
   VictoryChart,
   VictoryLabel,
   VictoryLine,
   VictoryScatter,
   VictoryTheme,
} from 'victory-native';
import { ChartValue } from '../../../types/types';

interface Props {
   data: ChartValue[];
   title: string;
}

export const WeightChart = ({ data, title }: Props) => {
   const { theme } = useTheme();

   const getTickValues = (data: ChartValue[]) => {
      let weights: number[] = [];
      data.forEach((chartValue) => {
         if (!weights.includes(chartValue.weight)) {
            weights.push(chartValue.weight);
         }
      });
      return weights;
   };

   const tickValues = getTickValues(data);
   return (
      <VictoryChart
         style={{
            parent: {
               border: '1 solid #ccc',
            },
         }}
         scale={{ x: 'time', y: 'linear' }}
         theme={VictoryTheme.material}
         domainPadding={25}
      >
         <VictoryAxis
            dependentAxis={true}
            tickValues={tickValues}
            style={{
               grid: { stroke: 'none' },
               tickLabels: {
                  fontSize: 12,
                  padding: 5,
                  fill: theme.colors.black,
               },
            }}
         />
         <VictoryAxis
            style={{
               grid: { stroke: 'none' },
               tickLabels: {
                  fontSize: 12,
                  padding: 5,
                  fill: theme.colors.black,
               },
            }}
         />
         <VictoryLine
            x={'date'}
            y={'weight'}
            labels={({ datum }) => datum.weight}
            style={{
               data: { stroke: theme.colors.black },
               labels: { fontSize: 12, fill: theme.colors.black },
            }}
            data={data}
         />
         <VictoryScatter
            data={data}
            x={'date'}
            y={'weight'}
            style={{
               data: {
                  fill: theme.colors.primary,
                  stroke: theme.colors.primary,
               },
            }}
         />
         <VictoryLabel
            textAnchor='middle'
            style={[{ fontSize: 18, fill: theme.colors.black }]}
            x={195}
            y={25}
            text={title}
         />
      </VictoryChart>
   );
};
