import { AntDesign } from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, useTheme } from '@rneui/themed';
import { useForm } from 'react-hook-form';
import {
   Keyboard,
   KeyboardAvoidingView,
   Platform,
   TouchableWithoutFeedback,
   View,
} from 'react-native';
import * as yup from 'yup';
import { LoginForm, WelcomeStackParamList } from '../../../../types/types';
import { CustomInput } from '../../../components/form-inputs/custom-input/CustomInput';
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
   const loginStyles = makeLoginStyles(theme.colors);

   const formOptions = { resolver: yupResolver(formSchema) };

   const { control, handleSubmit, setError, formState, reset } =
      useForm<LoginForm>(formOptions);
   const { errors } = formState;

   const onSubmit = async (data: LoginForm) => {
      try {
         await dispatch(loginUser(data))
            .unwrap()
            .catch((err) => {
               setError('email', {
                  type: 'server',
                  message: 'No matching email and password found.',
               });
               setError('password', {
                  type: 'server',
                  message: 'No matching email and password found.',
               });
            });
      } catch (err) {
         console.error(err);
      }
   };

   return (
      <>
         <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={global.fullSize}
         >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
               <View style={global.screenEnd}>
                  <View style={loginStyles.heading}>
                     <Text style={[global.textCenter, global.gap]} h1>
                        Welcome Back
                     </Text>
                     <Text style={global.textCenter}>
                        Please log in below to get started
                     </Text>
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
                        <Text style={loginStyles.errorMessage}>
                           {errors.email.message}
                        </Text>
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
                        <Text style={loginStyles.errorMessage}>
                           {errors.password.message}
                        </Text>
                     )}
                     <Text
                        style={[
                           global.gap,
                           loginStyles.textLink,
                           loginStyles.textRight,
                        ]}
                     >
                        Forgot your password?
                     </Text>
                     <Button size='lg' onPress={handleSubmit(onSubmit)}>
                        Log in
                     </Button>

                     <View style={global.rowCenter}>
                        <View style={loginStyles.dividerLine} />
                        <View>
                           <Text style={loginStyles.formText}>OR</Text>
                        </View>
                        <View style={loginStyles.dividerLine} />
                     </View>

                     <Button
                        size='lg'
                        color='#DB4437'
                        containerStyle={global.gap}
                     >
                        Sign in with Google{' '}
                        <AntDesign name='google' size={24} color='white' />
                     </Button>
                     <View style={loginStyles.navigationText}>
                        <Text>Don't have an account?</Text>
                        <Link
                           style={loginStyles.link}
                           to={{ screen: 'Signup' }}
                        >
                           <Text style={loginStyles.textLink}>
                              Create Account
                           </Text>
                        </Link>
                     </View>
                  </View>
               </View>
            </TouchableWithoutFeedback>
         </KeyboardAvoidingView>
      </>
   );
};
