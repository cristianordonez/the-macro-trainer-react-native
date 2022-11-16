import { AntDesign } from '@expo/vector-icons';
import { Link } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { WelcomeStackParamList } from '../../../../types/types';
// import { CustomInput } from '../../../components/form-inputs/custom-input/CustomInput';
import { global } from '../../../style/global.styles';
import { makeLoginStyles } from './styles';

type Props = NativeStackScreenProps<WelcomeStackParamList, 'Login'>;

export const Login = ({ navigation }: Props) => {
   const { theme } = useTheme();
   const loginStyles = makeLoginStyles(theme.colors);
   return (
      <>
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
               {/* <CustomInput
                  secureTextEntry={false}
                  keyboardType={'email-address'}
                  iconName={'email'}
                  iconType={'material-community'}
                  label={'Email'}
                  textContentType='emailAddress'
               />
               <CustomInput
                  secureTextEntry={true}
                  keyboardType={'default'}
                  iconName={'key'}
                  iconType={'entypo'}
                  label={'Password'}
                  textContentType='password'
               /> */}
               <Text
                  style={[
                     global.gap,
                     loginStyles.textLink,
                     loginStyles.textRight,
                  ]}
               >
                  Forgot your password?
               </Text>
               <Button size='lg'>Log in</Button>

               <View style={global.rowCenter}>
                  <View style={loginStyles.dividerLine} />
                  <View>
                     <Text style={loginStyles.formText}>OR</Text>
                  </View>
                  <View style={loginStyles.dividerLine} />
               </View>

               <Button size='lg' color='#DB4437' containerStyle={global.gap}>
                  Sign in with Google{' '}
                  <AntDesign name='google' size={24} color='white' />
               </Button>
               <View style={loginStyles.navigationText}>
                  <Text>Don't have an account?</Text>
                  <Link style={loginStyles.link} to={{ screen: 'Signup' }}>
                     <Text style={loginStyles.textLink}>Create Account</Text>
                  </Link>
               </View>
            </View>
         </View>
      </>
   );
};
