import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@rneui/themed';
import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import {
   GlobalUserState,
   WelcomeStackParamList,
} from '../../../../types/types';
import { useAppSelector } from '../../../app/hooks/reduxHooks';
import { selectUser } from '../../../app/reducers/userReducer';
import { CustomInput } from '../../../components/form-inputs/custom-input/CustomInput';
import { CustomLinearProgress } from '../../../components/linear-progress/CustomLinearProgress';
import { global } from '../../../style/global.styles';

type Props = NativeStackScreenProps<
   WelcomeStackParamList,
   'CompleteRegistration'
>;

export const CompleteRegistration = ({ route, navigation }: Props) => {
   //   username: string;
   //   email: string;
   //   password: string;
   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm({
      defaultValues: {
         username: '',
         email: '',
         password: '',
         confirmPassword: '',
      },
   });

   console.log('route.params: ', route.params);
   const state = useAppSelector(selectUser);
   console.log('state: ', state);
   const onSubmit = (data: GlobalUserState) => {
      console.log(data);
      navigation.navigate('Main');
   };

   return (
      <View style={global.screenEnd}>
         <CustomLinearProgress index={7} progress={1} />
         <Text h4 style={global.screenTitle}>
            Great! Complete your registration
         </Text>

         <View
            style={[{ width: '100%', flex: 1, justifyContent: 'space-evenly' }]}
         >
            <CustomInput
               secureTextEntry={false}
               keyboardType='default'
               iconName='user'
               control={control}
               iconType='ant-design'
               label='Username'
               name='username'
               textContentType='username'
            />
            <CustomInput
               secureTextEntry={false}
               keyboardType='email-address'
               iconName='email'
               iconType='material-community'
               label='Email'
               control={control}
               name='email'
               textContentType='emailAddress'
            />
            <CustomInput
               secureTextEntry={true}
               keyboardType='default'
               iconName='key'
               iconType='entypo'
               label='Password'
               control={control}
               name='password'
               textContentType='password'
            />
            <CustomInput
               secureTextEntry={true}
               keyboardType='default'
               name='confirmPassword'
               iconName='key'
               iconType='entypo'
               control={control}
               label='Confirm Password'
               textContentType='password'
            />
         </View>
         <Button
            onPress={handleSubmit(onSubmit)}
            title={`Create Account`}
            size='lg'
         />
      </View>
   );
};
