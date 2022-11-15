import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import { WelcomeStackParamList } from '../../../../types/types';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { selectGoals } from '../../../reducers/goalsReducer';
import { global } from '../../../style/global.styles';
type Props = NativeStackScreenProps<WelcomeStackParamList, 'CalculatedGoals'>;

export const CalculatedGoals = ({ navigation }: Props) => {
   const state = useAppSelector(selectGoals);
   console.log('state: ', state);
   const handlePress = () => {
      navigation.navigate('CompleteRegistration');
   };

   return (
      <View style={[global.screenEnd]}>
         {state.status === 'succeeded' ? (
            <>
               <Text h4 style={[global.screenTitle, global.textCenter]}>
                  What is your last known weight?
               </Text>
               <View style={global.inputRow}>
                  <View style={global.inputContainer}></View>
                  <View style={global.toggleContainer}></View>
               </View>
               <Button onPress={handlePress} title={`Complete`} size='lg' />
            </>
         ) : null}
      </View>
   );
};
