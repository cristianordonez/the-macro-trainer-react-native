import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { CustomText } from '../custom-text/CustomText';

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
         <CustomText
            humanText={'Today'}
            fontFamily='Lato'
            textAlign='center'
            h3={true}
            opacity={true}
            gap={true}
         />
         <CustomText
            humanText={currentDate}
            fontFamily='Lato_Bold'
            textAlign='center'
            h2={true}
            opacity={false}
            gap={false}
         />
      </View>
   );
};
