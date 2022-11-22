import { useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { global } from '../../../../style/global.styles';
import { makeProgressSquareStyles } from './makeProgressSquareStyles';

interface Props {
   title: string;
   iconName: string;
   iconType: string;
   amount: number;
   goal: number;
   metric: string;
}

export const GeneralProgressSquare = ({
   title,
   iconName,
   iconType,
   amount,
   goal,
   metric,
}: Props) => {
   const { theme } = useTheme();
   const progressSquareStyles = makeProgressSquareStyles(theme.colors);
   return (
      <View
         style={[global.containerBorder, progressSquareStyles.container]}
      ></View>
   );
};
