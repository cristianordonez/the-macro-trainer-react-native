import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { formatSeconds } from '../../utils/format-seconds/formatSeconds';
import { CustomText } from '../custom-text/CustomText';

export const WorkoutTimer = () => {
   const [seconds, setSeconds] = useState<number>(0);

   useEffect(() => {
      let interval: number;

      interval = window.setInterval(() => {
         setSeconds((seconds) => seconds + 1);
      }, 1000);

      return () => clearInterval(interval);
   }, []);

   return (
      <View>
         <CustomText h1={true} humanText={`${formatSeconds(seconds)}`} />
      </View>
   );
};
