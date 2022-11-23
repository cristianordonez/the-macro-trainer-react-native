import { Icon, Text, useTheme } from '@rneui/themed';
import { Dimensions, View } from 'react-native';
import { CircularProgress } from '../../../../components/circular-progress/CircularProgress';
import { global } from '../../../../style/global.styles';

interface Props {
   title: string;
   iconName: string;
   iconType: string;
   amount: number;
   goal: number;
   metric: string;
   color: string;
}

const gap = 10;
const itemsPerRow = 2;
const totalGapSize = (itemsPerRow - 1) * gap;
const windowWidth = Dimensions.get('window').width;
const childWidth = (windowWidth - totalGapSize) / itemsPerRow;

export const GeneralProgressSquare = ({
   title,
   iconName,
   iconType,
   amount,
   color,
   goal,
   metric,
}: Props) => {
   const { theme } = useTheme();
   return (
      <View
         style={[
            global.containerBorder,
            {
               backgroundColor: theme.colors.searchBg,
               height: childWidth - 10,
               width: childWidth - 10,
               marginVertical: gap / 2,
               marginHorizontal: gap / 2,
               alignItems: 'center',
               justifyContent: 'space-evenly',
            },
         ]}
      >
         <View style={[global.rowCenter]}>
            <Text style={{ paddingRight: 5 }}>{title}</Text>
            <Icon name={iconName} type={iconType} size={12} />
         </View>

         <CircularProgress
            size={childWidth - 75}
            color={color}
            progress={1 - amount / goal}
            amount={amount}
            metric={metric}
         />
      </View>
   );
};
