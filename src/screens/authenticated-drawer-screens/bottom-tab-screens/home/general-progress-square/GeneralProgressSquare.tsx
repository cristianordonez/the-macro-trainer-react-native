import { Icon, Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { CircularProgress } from '../../../../../components/circular-progress/CircularProgress';
import { global } from '../../../../../style/global.styles';
import { createFlexGap } from '../../../../../utils/createFlexGap';

interface Props {
   title: string;
   iconName: string;
   iconType: string;
   amount: number;
   goal: number;
   metric: string;
   color: string;
}

export const GeneralProgressSquare = ({
   title,
   iconName,
   iconType,
   amount,
   color,
   goal,
   metric,
}: Props) => {
   const { height, width, marginHorizontal, marginVertical } = createFlexGap(
      2,
      10
   );
   const { theme } = useTheme();
   return (
      <View
         style={[
            global.containerBorder,
            {
               backgroundColor: theme.colors.searchBg,
               height: height,
               width: width,
               marginVertical: marginVertical,
               marginHorizontal: marginHorizontal,
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
            size={height - 75}
            color={color}
            progress={1 - amount / goal}
            amount={amount}
            metric={metric}
            isCaloriesRemaining={false}
         />
      </View>
   );
};
