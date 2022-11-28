import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@rneui/themed';
import React, { useState } from 'react';
import { View } from 'react-native';
import { CardOptionType, WelcomeStackParamList } from '../../../../types/types';
import { CardOption } from '../../../components/form-inputs/card-option/CardOption';
import { useAppDispatch } from '../../../redux/hooks/reduxHooks';
import { updateActivityLevel } from '../../../redux/reducers/userMetricsReducer';
import { global } from '../../../style/global.styles';
import { createAlert } from '../../../utils/createAlert';
import { CustomLinearProgress } from './linear-progress/CustomLinearProgress';

type Props = NativeStackScreenProps<WelcomeStackParamList, 'ActivityLevel'>;

const cards: CardOptionType[] = [
   {
      logo: 'sitting',
      type: 'Fontello',
      title: 'Sedentary',
      description: 'Little to no exercise',
      id: 0,
      value: 1,
   },
   {
      logo: 'walking',
      type: 'font-awesome-5',
      title: 'Moderately Active',
      description:
         'About 150 minutes moderate intensity or 75 minutes high intensity exercise per week',
      id: 1,
      value: 1.2,
   },
   {
      logo: 'running',
      type: 'font-awesome-5',
      title: 'Active',
      description:
         'About 250 minutes moderate intensity or 150 minutes high intensity exercise per week',
      id: 2,
      value: 1.5,
   },
];

export const ActivityLevel = ({ navigation }: Props) => {
   const [activeVal, setActiveVal] = useState<CardOptionType['value']>(0);
   const dispatch = useAppDispatch();

   const handlePress = () => {
      if (activeVal === 0) {
         createAlert({
            heading: 'Hold on!',
            message: 'Please select an activity level.',
            btnOptions: [{ text: 'Okay' }],
         });
      } else {
         const action = updateActivityLevel(activeVal);
         dispatch(action);
         navigation.navigate('Gender');
      }
   };
   return (
      <View style={global.screenEnd}>
         <CustomLinearProgress index={2} progress={0.32} />
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
                  value={card.value}
                  activeVal={activeVal}
                  setActiveVal={setActiveVal}
               />
            ))}
         </View>
         <Button onPress={handlePress} title={`Continue`} size='lg' />
      </View>
   );
};
