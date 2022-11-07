import { ButtonGroup, useTheme } from '@rneui/themed';
import { Dispatch, SetStateAction } from 'react';
import { makeCustomGroupStyles } from './styles';

interface Props {
   buttons: string[];
   selectedIndex: number;
   setSelectedIndex: Dispatch<SetStateAction<number>>;
}
export const CustomButtonGroup = ({
   buttons,
   selectedIndex,
   setSelectedIndex,
}: Props) => {
   const { theme } = useTheme();
   const customGroupStyles = makeCustomGroupStyles(theme.colors);

   return (
      <ButtonGroup
         buttons={buttons}
         selectedIndex={selectedIndex}
         containerStyle={customGroupStyles.container}
         onPress={(value) => setSelectedIndex(value)}
         buttonContainerStyle={customGroupStyles.buttonContainer}
      />
   );
};
