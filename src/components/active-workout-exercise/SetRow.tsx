import { useTheme } from '@rneui/themed';
import { useMemo, useState } from 'react';
import { View } from 'react-native';
import { Set } from '../../../types/types';
import { useAppDispatch } from '../../redux/hooks/reduxHooks';
import {
   setCurrentAmrapGoal,
   toggleShowModal,
} from '../../redux/reducers/activeWorkoutReducer';
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
   const dispatch = useAppDispatch();

   //todo update global state for which reps are completed
   const handlePress = () => {
      if (amrap) {
         //first update redux currentamprapgoal
         dispatch(setCurrentAmrapGoal(reps_target));
         //then open modal
         dispatch(toggleShowModal(true));
      } else {
         let currentReps = completedReps;
         let togglePressed = isPressed;
         if (!isPressed) {
            currentReps = completedReps;
            togglePressed = true;
         } else if (currentReps === 0) {
            currentReps = reps_target;
            togglePressed = false;
         } else {
            currentReps -= 1;
         }
         setCompletedReps(currentReps);
         setIsPressed(togglePressed);
      }
   };

   const currentWeight = useMemo(() => {
      return Math.round((repMax * percentage_rm) / 5) * 5;
   }, [repMax, percentage_rm]);

   const styles = activeWorkoutExerciseStyles(theme.colors);

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
