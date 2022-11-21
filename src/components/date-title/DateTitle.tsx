import { Text } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { global } from '../../style/global.styles';
import { dateTitleStyles } from './styles';

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
      <View style={dateTitleStyles.container}>
         <Text style={[global.gap, global.textOpacity]}>Today</Text>
         <Text style={global.textBold}>{currentDate}</Text>
      </View>
   );
};
