import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@rneui/themed';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { WelcomeStackParamList } from '../../../../types/types';
import { LoadingImage } from '../../../components/loading-image/LoadingImage';
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

   useEffect(() => {
      state.status === 'succeeded'
         ? navigation.setOptions({ headerShown: true })
         : navigation.setOptions({ headerShown: false });
   }, [state.status]);
   if (state.status === 'succeeded') {
      return (
         <View style={[global.screenEnd]}>
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
         </View>
      );
   } else {
      return (
         <View style={[global.screenCenter, { paddingBottom: 0 }]}>
            <LoadingImage />
         </View>
      );
   }
};
