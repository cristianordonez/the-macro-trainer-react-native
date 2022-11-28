import { yupResolver } from '@hookform/resolvers/yup';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, useTheme } from '@rneui/themed';
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
import { CustomInput } from '../../../components/form-inputs/custom-input/CustomInput';
import { useAppDispatch } from '../../../redux/hooks/reduxHooks';
import { createAccount } from '../../../redux/reducers/authReducer';
import { toggleModal } from '../../../redux/reducers/modalReducer';
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
         console.log('response in onsubmit: ', response);
      } catch (err) {
         const error = err as unknown as ServerResponseError;
         console.error(error);
         setError('email', {
            type: 'server',
            message: error.message,
         });
      }
      try {
         //todo then send request to save users goals and metrics
         //todo then update auth status
         //todo dont forget to untoggle modal
      } catch (err) {
         console.error(err);
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
                  <Text h4 style={[global.screenTitle, global.gap]}>
                     Last step!
                  </Text>
                  <Text style={global.textCenter}>
                     Fill out the fields below to save your nutrition goals and
                     create your account.
                  </Text>

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
         <CustomModal>
            <View
               style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
               }}
            >
               <Text style={[global.gap, global.textBold]}>
                  Creating your account
               </Text>
               <ActivityIndicator size='large' />
            </View>
         </CustomModal>
      </>
   );
};
