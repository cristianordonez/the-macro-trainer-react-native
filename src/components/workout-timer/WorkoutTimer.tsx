import { useEffect } from 'react';
import { View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/reduxHooks';
import {
   beginActiveWorkout,
   selectActiveWorkoutTimer,
} from '../../redux/reducers/activeWorkoutReducer';
import { formatSeconds } from '../../utils/format-seconds/formatSeconds';
import { CustomText } from '../custom-text/CustomText';

export const WorkoutTimer = () => {
   // const [seconds, setSeconds] = useState<number>(0);
   const dispatch = useAppDispatch();
   const seconds = useAppSelector(selectActiveWorkoutTimer);

   //todo complete reducer that starts timer
   useEffect(() => {
      dispatch(beginActiveWorkout());
      ////let interval: number;

      ////interval = window.setInterval(() => {
      ////   setSeconds((seconds) => seconds + 1);
      ////}, 1000);

      //// return () => clearInterval(interval);
   }, []);

   return (
      <View>
         <CustomText h1={true} humanText={`${formatSeconds(seconds)}`} />
      </View>
   );
};
