import { yupResolver } from '@hookform/resolvers/yup';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, useTheme } from '@rneui/themed';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
   Keyboard,
   KeyboardAvoidingView,
   Platform,
   TouchableWithoutFeedback,
   View,
} from 'react-native';
import * as yup from 'yup';
import { SignupForm, WelcomeStackParamList } from '../../../../types/types';
import { CustomInput } from '../../../components/form-inputs/custom-input/CustomInput';
import { CustomLinearProgress } from '../../../components/linear-progress/CustomLinearProgress';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { createAccount } from '../../../redux/reducers/userReducer';
import { global } from '../../../style/global.styles';
import { makeRegistrationStyles } from './makeRegistrationStyles';

type Props = NativeStackScreenProps<
   WelcomeStackParamList,
   'CompleteRegistration'
>;

const formSchema = yup.object().shape({
   username: yup
      .string()
      .required('Username is required')
      .min(3, 'Username must be at least 3 characters long'),
   email: yup
      .string()
      .email('Pleae enter a valid email address.')
      .required('Email is required')
      .min(3, 'Username must be at least 3 characters long'),
   password: yup
      .string()
      .required('Password is required')
      .min(3, 'Password must be at 5 char long'),
   confirmPassword: yup
      .string()
      .required('Password is required')
      .oneOf([yup.ref('password')], 'Passwords do not match'),
});

export const CompleteRegistration = ({ route, navigation }: Props) => {
   const dispatch = useAppDispatch();
   const { theme } = useTheme();
   const formOptions = { resolver: yupResolver(formSchema) };
   const { control, handleSubmit, formState, reset } =
      useForm<SignupForm>(formOptions);
   const { errors } = formState;

   const onSubmit = async (data: SignupForm) => {
      try {
         await dispatch(createAccount(data));
      } catch (err) {
         console.log('err in onsubmit: ', err);
      } finally {
         // navigation.navigate('Main');
      }
   };

   const registrationStyles = makeRegistrationStyles(theme.colors);
   return (
      <KeyboardAvoidingView
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
         style={global.fullSize}
      >
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={[global.screenEnd, global.fullSize]}>
               <CustomLinearProgress index={7} progress={1} />
               <Text h4 style={global.screenTitle}>
                  Great! Complete your registration
               </Text>

               <View style={[registrationStyles.formContainer]}>
                  <View>
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
                     {errors.username && (
                        <Text style={registrationStyles.errorMessage}>
                           {errors.username.message}
                        </Text>
                     )}
                  </View>
                  <View>
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
                     {errors.email && (
                        <Text style={registrationStyles.errorMessage}>
                           {errors.email.message}
                        </Text>
                     )}
                  </View>
                  <View>
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
                     {errors.password && (
                        <Text style={registrationStyles.errorMessage}>
                           {errors.password.message}
                        </Text>
                     )}
                  </View>
                  <View>
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
                     {errors.confirmPassword && (
                        <Text style={registrationStyles.errorMessage}>
                           {errors.confirmPassword.message}
                        </Text>
                     )}
                  </View>
               </View>
               <Button
                  onPress={handleSubmit(onSubmit)}
                  title={`Create Account`}
                  size='lg'
               />
            </View>
         </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
   );
};
