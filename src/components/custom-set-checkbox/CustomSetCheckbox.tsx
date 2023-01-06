import { useTheme } from '@rneui/themed';
import { Pressable } from 'react-native';
import { CustomText } from '../custom-text/CustomText';
import { CustomSetCheckboxStyles } from './CustomSetCheckboxStyles';

interface Props {
   isPressed: boolean;
   handlePress: () => void;
   completedReps: number;
   amrap: boolean;
}

export const CustomSetCheckbox = ({
   isPressed,
   handlePress,
   completedReps,
   amrap,
}: Props) => {
   const styles = CustomSetCheckboxStyles;
   const { theme } = useTheme();

   //todo if it is amrap, open up dialog that allows user to enter number of sets

   return (
      <Pressable
         onPress={handlePress}
         style={({ pressed }) => [
            {
               backgroundColor: isPressed
                  ? theme.colors.success
                  : theme.colors.divider,
            },
            styles.container,
         ]}
      >
         <CustomText
            humanText={amrap ? `+${completedReps}` : `${completedReps}`}
         />
      </Pressable>
   );
};
