import { AntDesign } from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, useTheme } from '@rneui/themed';
import { useForm } from 'react-hook-form';
import {
   Keyboard,
   KeyboardAvoidingView,
   Platform,
   TouchableWithoutFeedback,
   View,
} from 'react-native';
import * as yup from 'yup';
import {
   LoginForm,
   ServerResponseError,
   WelcomeStackParamList,
} from '../../../../types/types';
import { CustomText } from '../../../components/custom-text/CustomText';
import { CustomInput } from '../../../components/form-inputs/custom-input/CustomInput';
import { OrDividerLine } from '../../../components/or-divider-line/OrDividerLine';
import { useAppDispatch } from '../../../redux/hooks/reduxHooks';
import { loginUser } from '../../../redux/reducers/authReducer';
import { global } from '../../../style/global.styles';
import { makeLoginStyles } from './styles';

type Props = NativeStackScreenProps<WelcomeStackParamList, 'Login'>;

const formSchema = yup.object().shape({
   email: yup
      .string()
      .email('Pleae enter a valid email address.')
      .required('Email is required'),
   password: yup.string().required('Please enter a password'),
});

export const Login = ({ navigation }: Props) => {
   const dispatch = useAppDispatch();
   const { theme } = useTheme();

   const formOptions = { resolver: yupResolver(formSchema) };

   const { control, handleSubmit, setError, formState } =
      useForm<LoginForm>(formOptions);
   const { errors } = formState;

   const onSubmit = async (data: LoginForm) => {
      try {
         const response = await dispatch(loginUser(data)).unwrap();
      } catch (err) {
         const error = err as unknown as ServerResponseError;
         console.error(error);
         setError('email', {
            type: 'server',
            message: error.message,
         });
         setError('password', {
            type: 'server',
            message: error.message,
         });
      }
   };

   const loginStyles = makeLoginStyles(theme.colors);
   return (
      <>
         <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={global.fullSize}
         >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
               <View style={global.screenEnd}>
                  <View style={loginStyles.heading}>
                     <CustomText
                        h0={true}
                        textAlign='center'
                        gap={true}
                        fontFamily='Lato_Bold'
                        humanText='Welcome Back'
                     />
                     <CustomText
                        h2={true}
                        textAlign='center'
                        humanText='Please log in below to get started'
                     />
                  </View>
                  <View style={loginStyles.form}>
                     <CustomInput
                        secureTextEntry={false}
                        keyboardType={'email-address'}
                        iconName={'email'}
                        iconType={'material-community'}
                        label={'Email'}
                        textContentType='emailAddress'
                        control={control}
                        name={'email'}
                     />
                     {errors.email && (
                        <CustomText
                           color='error'
                           h4={true}
                           fontFamily='Lato_Italic'
                           humanText={errors.email.message || ''}
                        />
                     )}
                     <CustomInput
                        secureTextEntry={true}
                        keyboardType={'default'}
                        iconName={'key'}
                        iconType={'entypo'}
                        label={'Password'}
                        textContentType='password'
                        control={control}
                        name={'password'}
                     />
                     {errors.password && (
                        <CustomText
                           color='error'
                           h4={true}
                           fontFamily='Lato_Italic'
                           humanText={errors.password.message || ''}
                        />
                     )}
                     <CustomText
                        h3={true}
                        gap={true}
                        textAlign='right'
                        color='link'
                        humanText='Forgot your password?'
                     />
                     <Button size='lg' onPress={handleSubmit(onSubmit)}>
                        Log in
                     </Button>
                     <OrDividerLine />
                     <Button
                        size='lg'
                        color='#DB4437'
                        containerStyle={global.gap}
                     >
                        Sign in with Google{' '}
                        <AntDesign name='google' size={24} color='white' />
                     </Button>
                     <View style={loginStyles.navigationText}>
                        <CustomText
                           h3={true}
                           humanText={`Don't have an account?`}
                        />
                        <Link
                           style={loginStyles.link}
                           to={{ screen: 'Signup' }}
                        >
                           <CustomText
                              h3={true}
                              color='link'
                              humanText='Create Account'
                           />
                        </Link>
                     </View>
                  </View>
               </View>
            </TouchableWithoutFeedback>
         </KeyboardAvoidingView>
      </>
   );
};
