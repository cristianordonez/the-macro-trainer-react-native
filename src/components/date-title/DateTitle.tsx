import { Text } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { global } from '../../style/global.styles';

export const DateTitle = () => {
   const [currentDate, setCurrentDate] = useState<string>('');
   useEffect(() => {
      const date = new Date().toLocaleDateString('en-us', {
         weekday: 'short',
         day: '2-digit',
         month: 'short',
      });
      setCurrentDate(date);
   }, []);
   return (
      <View>
         <Text style={[global.gap, global.textOpacity, global.textCenter]}>
            Today
         </Text>
         <Text style={[global.textBold, global.textCenter]}>{currentDate}</Text>
      </View>
   );
};
