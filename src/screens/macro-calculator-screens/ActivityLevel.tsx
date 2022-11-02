import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@rneui/themed';
import React, { useState } from 'react';
import { View } from 'react-native';
import { WelcomeStackParamList } from '../../../types/types';
import { CardOption } from '../../components/form-inputs/card-option/CardOption';
import { CustomLinearProgress } from '../../components/linear-progress/CustomLinearProgress';
import { global } from '../../style/global.styles';

type Props = NativeStackScreenProps<WelcomeStackParamList, 'ActivityLevel'>;

const cards = [
   {
      logo: 'sitting',
      type: 'Fontello',
      title: 'Sedentary',
      description: 'Little to no exercise',
      id: 0,
   },
   {
      logo: 'walking',
      type: 'font-awesome-5',
      title: 'Moderately Active',
      description: 'About 150 minutes of exercise per week',
      id: 1,
   },
   {
      logo: 'running',
      type: 'font-awesome-5',
      title: 'Active',
      description: 'Greater than 250 minutes of exercise per week',
      id: 2,
   },
];

export const ActivityLevel = ({ navigation }: Props) => {
   const [activeId, setActiveId] = useState<number | null>(null);
   return (
      <View style={global.screenEnd}>
         <CustomLinearProgress index={2} progress={0.28} />
         <Text h3 style={global.screenTitle}>
            What is your activity level?
         </Text>
         <View style={global.containerCenter}>
            {cards.map((card) => (
               <CardOption
                  key={card.id}
                  logo={card.logo}
                  type={card.type}
                  description={card.description}
                  title={card.title}
                  id={card.id}
                  activeId={activeId}
                  setActiveId={setActiveId}
               />
            ))}
         </View>
         <Button
            onPress={() => navigation.navigate('Gender')}
            title={`Continue`}
            size='lg'
         />
      </View>
   );
};
