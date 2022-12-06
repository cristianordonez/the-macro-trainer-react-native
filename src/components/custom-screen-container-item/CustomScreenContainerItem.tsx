import { useTheme } from '@rneui/themed';
import { Pressable } from 'react-native';
import { global } from '../../style/global.styles';
import { createFlexGap } from '../../utils/createFlexGap';

interface Props {
   children: React.ReactNode;
   itemsPerRow: number;
   gap: number;
}

export const CustomScreenContainerItem = ({
   children,
   itemsPerRow,
   gap,
}: Props) => {
   const { theme } = useTheme();
   const { height, width, marginHorizontal, marginVertical } = createFlexGap(
      itemsPerRow,
      gap
   );
   return (
      <Pressable
         onPress={() => {}}
         style={({ pressed }) => [
            global.containerBorder,
            {
               backgroundColor: pressed
                  ? theme.colors.primary
                  : theme.colors.searchBg,
               height: height,
               width: width,
               marginVertical: marginVertical,
               marginHorizontal: marginHorizontal,
               alignItems: 'center',
               justifyContent: 'space-evenly',
            },
         ]}
      >
         {children}
      </Pressable>
   );
};
