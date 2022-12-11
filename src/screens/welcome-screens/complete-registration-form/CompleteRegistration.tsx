import { yupResolver } from '@hookform/resolvers/yup';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, useTheme } from '@rneui/themed';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
   ActivityIndicator,
   Keyboard,
   KeyboardAvoidingView,
   Platform,
   TouchableWithoutFeedback,
   View,
} from 'react-native';
import * as yup from 'yup';
import {
   ServerResponseError,
   SignupForm,
   WelcomeStackParamList,
} from '../../../../types/types';
import { CustomModal } from '../../../components/custom-modal/CustomModal';
import { CustomText } from '../../../components/custom-text/CustomText';
import { CustomInput } from '../../../components/form-inputs/custom-input/CustomInput';
import { useAppDispatch } from '../../../redux/hooks/reduxHooks';
import { createAccount } from '../../../redux/reducers/authReducer';
import { toggleModal } from '../../../redux/reducers/modalReducer';
import { saveGoals } from '../../../redux/reducers/userGoalsReducer';
import { saveUserMetrics } from '../../../redux/reducers/userMetricsReducer';
import { global } from '../../../style/global.styles';
import { makeRegistrationStyles } from './makeRegistrationStyles';

type Props = NativeStackScreenProps<
   WelcomeStackParamList,
   'CompleteRegistration'
>;

const formSchema = yup.object().shape({
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
   const { control, handleSubmit, setError, formState } =
      useForm<SignupForm>(formOptions);
   const { errors } = formState;

   type ResponseData = { message: string; status: number };

   const onSubmit = async (formData: SignupForm) => {
      try {
         const response = await dispatch(createAccount(formData)).unwrap();
         await dispatch(toggleModal(true));
         await dispatch(saveUserMetrics()).unwrap();
         await dispatch(saveGoals()).unwrap();
         await dispatch(toggleModal(false));
      } catch (err) {
         const error = err as unknown as ServerResponseError;
         console.error(error);
         setError('email', {
            type: 'server',
            message: error.message,
         });
      }
   };

   const registrationStyles = makeRegistrationStyles(theme.colors);
   return (
      <>
         <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={global.fullSize}
         >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
               <View style={[global.screenEnd, global.fullSize]}>
                  <View style={{ paddingTop: '20%' }}>
                     <CustomText
                        h1={true}
                        gap={true}
                        fontFamily='Lato_Bold'
                        textAlign='center'
                        humanText='Last step!'
                     />

                     <CustomText
                        h3={true}
                        textAlign='center'
                        humanText='Fill out the fields below to save your nutrition goals and
                     create your account.'
                     />
                  </View>
                  <View style={[registrationStyles.formContainer]}>
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
                           <CustomText
                              color='error'
                              h3={true}
                              fontFamily='Lato_Italic'
                              humanText={errors.email.message || ''}
                           />
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
                           <CustomText
                              color='error'
                              h3={true}
                              fontFamily='Lato_Italic'
                              humanText={errors.password.message || ''}
                           />
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
                           <CustomText
                              color='error'
                              h3={true}
                              fontFamily='Lato_Italic'
                              humanText={errors.confirmPassword.message || ''}
                           />
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
         <CustomModal>
            <View
               style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
               }}
            >
               <CustomText
                  h3={true}
                  gap={true}
                  fontFamily='Lato_Bold'
                  humanText='Creating your account'
               />
               <ActivityIndicator size='large' />
            </View>
         </CustomModal>
      </>
   );
};
