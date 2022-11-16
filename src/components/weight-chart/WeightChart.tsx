import { Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import {
   VictoryAxis,
   VictoryChart,
   VictoryLine,
   VictoryScatter,
   VictoryTheme,
} from 'victory-native';
import { ChartValue } from '../../../types/types';

interface Props {
   data: ChartValue[];
}

export const WeightChart = ({ data }: Props) => {
   const { theme } = useTheme();
   //    const data = [
   //       {
   //          date: new Date(),
   //          weight: 1,
   //       },
   //       {
   //          date: 2,
   //          weight: 2,
   //       },
   //       {
   //          date: 3,
   //          weight: 45,
   //       },
   //    ];

   return (
      <View style={{ flex: 1 }}>
         <Text>Start</Text>
         <Text>Expected</Text>
         <VictoryChart
            style={{
               background: { fill: 'white' },
               parent: {
                  border: '1 solid #ccc',
               },
            }}
            scale={{ x: 'time' }}
            theme={VictoryTheme.material}
            domainPadding={35}
         >
            <VictoryAxis
               dependentAxis={true}
               style={{
                  tickLabels: {
                     fontSize: 15,
                     padding: 5,
                     fill: theme.colors.black,
                  },
               }}
            />
            <VictoryAxis
               style={{
                  tickLabels: {
                     fontSize: 15,
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
                  labels: { fontSize: 12 },
               }}
               data={data}
            />
            <VictoryScatter data={data} x={'date'} y={'weight'} />
         </VictoryChart>
      </View>
   );
};
