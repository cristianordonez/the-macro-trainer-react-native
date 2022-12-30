import { Icon } from '@rneui/themed';
import { View } from 'react-native';
import { global } from '../../style/global.styles';
import { createFlexGap } from '../../utils/createFlexGap';
import { CircularProgress } from '../circular-progress/CircularProgress';
import { CustomScreenContainerItem } from '../custom-screen-container-item/CustomScreenContainerItem';
import { CustomText } from '../custom-text/CustomText';

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
   const { height } = createFlexGap(2, 10);

   return (
      <CustomScreenContainerItem
         gap={10}
         itemsPerRow={2}
         handlePress={() => null}
         index={1}
      >
         <View style={[global.rowCenter]}>
            <View style={{ paddingRight: 5 }}>
               <CustomText humanText={title} h3={true} />
            </View>
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
      </CustomScreenContainerItem>
   );
};
