import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@rneui/themed';
import React, { useState } from 'react';
import { View } from 'react-native';
import { CardOptionType, WelcomeStackParamList } from '../../../../types/types';
import { useAppDispatch } from '../../../app/hooks/reduxHooks';
import { updateGender } from '../../../app/reducers/userReducer';
import { CardOption } from '../../../components/form-inputs/card-option/CardOption';
import { CustomLinearProgress } from '../../../components/linear-progress/CustomLinearProgress';
import { global } from '../../../style/global.styles';

type Props = NativeStackScreenProps<WelcomeStackParamList, 'Gender'>;

const cards: CardOptionType[] = [
   {
      logo: 'male-symbol',
      type: 'foundation',
      title: 'Male',
      description: null,
      id: 0,
      value: 'male',
   },
   {
      logo: 'female-symbol',
      type: 'foundation',
      title: 'Female',
      description: null,
      id: 1,
      value: 'female',
   },
   {
      logo: 'gender-non-binary',
      type: 'material-community',
      title: 'Non-binary',
      description: null,
      id: 2,
      value: 'non_binary',
   },
];

export const Gender = ({ navigation }: Props) => {
   const [activeVal, setActiveVal] = useState<CardOptionType['value']>('');
   const dispatch = useAppDispatch();

   const handlePress = () => {
      const action = updateGender(activeVal);
      dispatch(action);
      navigation.navigate('Age');
   };
   return (
      <View style={global.screenEnd}>
         <CustomLinearProgress index={3} progress={0.42} />
         <Text h4 style={global.screenTitle}>
            {' '}
            What is your gender?
         </Text>
         <View style={global.containerCenter}>
            {cards.map((card) => (
               <CardOption
                  key={card.id}
                  logo={card.logo}
                  type={card.type}
                  description={card.description}
                  title={card.title}
                  value={card.value}
                  id={card.id}
                  activeVal={activeVal}
                  setActiveVal={setActiveVal}
               />
            ))}
         </View>
         <Button onPress={handlePress} title={`Continue`} size='lg' />
      </View>
   );
};
