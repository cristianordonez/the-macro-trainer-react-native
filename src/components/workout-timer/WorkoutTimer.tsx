import { Button } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { formatSeconds } from '../../utils/format-seconds/formatSeconds';

export const WorkoutTimer = () => {
   const [seconds, setSeconds] = useState<number>(0);
   const [isActive, setIsActive] = useState<boolean>(true);

   useEffect(() => {
      let interval: number;
      if (isActive) {
         interval = window.setInterval(() => {
            setSeconds((seconds) => seconds + 1);
         }, 1000);
      }
      return () => clearInterval(interval);
   }, [isActive]);

   //todo create util that displays correct time using seconds

   return (
      <View>
         <Button onPress={() => setIsActive(!isActive)}>
            {formatSeconds(seconds)}
         </Button>
      </View>
   );
};
