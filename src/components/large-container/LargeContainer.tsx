import { useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { global } from '../../style/global.styles';
import { makeLargeContainerStyles } from './makeLargeContainerStyles';

interface Props {
   children: React.ReactNode;
}
export const LargeContainer = ({ children }: Props) => {
   const { theme } = useTheme();

   const styles = makeLargeContainerStyles(theme.colors);

   return (
      <View
         style={[
            global.largeContainer,
            global.containerBorder,
            styles.container,
         ]}
      >
         {children}
      </View>
   );
};
