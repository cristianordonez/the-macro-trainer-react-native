import { useTheme } from '@rneui/themed';
import { View } from 'react-native';
import {
   VictoryAxis,
   VictoryChart,
   VictoryLine,
   VictoryScatter,
   VictoryTheme,
} from 'victory-native';
import { ChartValue } from '../../../types/types';
import { global } from '../../style/global.styles';

interface Props {
   data: ChartValue[];
}

export const WeightChart = ({ data }: Props) => {
   const { theme } = useTheme();

   return (
      <View style={global.containerCenter}>
         <VictoryChart
            style={{
               background: { fill: 'white' },
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
                  labels: { fontSize: 12 },
               }}
               data={data}
            />
            <VictoryScatter data={data} x={'date'} y={'weight'} />
         </VictoryChart>
      </View>
   );
};
