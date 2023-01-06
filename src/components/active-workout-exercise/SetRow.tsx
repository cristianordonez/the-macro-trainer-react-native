import { useTheme } from '@rneui/themed';
import { useMemo, useState } from 'react';
import { View } from 'react-native';
import { Set } from '../../../types/types';
import { global } from '../../style/global.styles';
import { CustomSetCheckbox } from '../custom-set-checkbox/CustomSetCheckbox';
import { CustomText } from '../custom-text/CustomText';
import { activeWorkoutExerciseStyles } from './activeWorkoutExerciseStyles';

interface Props extends Set {
   repMax: number;
}

export const SetRow = ({
   amrap,
   percentage_rm,
   reps_target,
   set_number,
   id,
   repMax,
}: Props) => {
   const [isPressed, setIsPressed] = useState<boolean>(false);
   const [completedReps, setCompletedReps] = useState<number>(reps_target);
   const { theme } = useTheme();

   //todo update global state for which reps are completed
   const handlePress = () => {
      let currentReps = completedReps;
      let togglePressed = isPressed;
      //create variable that will be used to update completed reps in UI
      //it will stay the same on initital press, subtract 1 from all other pressed unless it is 0 then reset
      if (!isPressed) {
         currentReps = completedReps;
         togglePressed = true;
      } else if (currentReps === 0) {
         currentReps = reps_target;
         togglePressed = false;
      } else {
         currentReps -= 1;
      }

      //update isPressed when current is equal to target other than for initial press

      // //let currentReps = completedReps === 0 ? reps_target : completedReps - 1;

      //// setIsPressed(currentReps === reps_target ? false : true);
      setCompletedReps(currentReps);
      setIsPressed(togglePressed);
   };

   const styles = activeWorkoutExerciseStyles(theme.colors);

   const currentWeight = useMemo(() => {
      return Math.round((repMax * percentage_rm) / 5) * 5;
   }, [repMax, percentage_rm]);

   //todo use usememo to get current value of weight lifted
   return (
      <View style={[styles.tableRow, global.gap]}>
         <View style={styles.tableCell}>
            <View style={styles.setNumContainer}>
               <CustomText humanText={`${set_number}`} />
            </View>
         </View>
         <View style={styles.tableCell}>
            <CustomText humanText={`${currentWeight}`} />
         </View>
         <View style={styles.tableCell}>
            <CustomSetCheckbox
               isPressed={isPressed}
               handlePress={handlePress}
               completedReps={completedReps}
               amrap={amrap}
            />
         </View>
      </View>
   );
};
