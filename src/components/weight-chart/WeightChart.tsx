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

   return (
      <VictoryChart
         style={{
            // background: { fill: 'white' },
            parent: {
               border: '1 solid #ccc',
            },
         }}
         scale={{ x: 'time' }}
         theme={VictoryTheme.material}
         domainPadding={25}
      >
         <VictoryAxis
            dependentAxis={true}
            style={{
               grid: { stroke: 'none' },
               tickLabels: {
                  fontSize: 15,
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
