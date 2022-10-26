import { Link } from '@react-navigation/native';

import { Button, Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { ArrowBack } from '../../components/arrows/ArrowBack';
import { EmailInput } from '../../components/form-inputs/EmailInput';
import { PasswordInput } from '../../components/form-inputs/PasswordInput';
import { Logo } from '../../components/logo/Logo';
import { global } from '../../style/global.styles';
import { loginStyles } from './styles';

export const Login = ({ navigation }) => {
   const { theme } = useTheme();
   return (
      <>
         <View style={global.screenEnd}>
            <View style={global.arrowBack}>
               <ArrowBack navigation={navigation} />
            </View>
            <View style={loginStyles.heading}>
               <Text style={global.textCenter} h1>
                  Welcome to the MacroTrainer
               </Text>
               <Logo />
            </View>
            <View style={loginStyles.form}>
               <EmailInput />
               <PasswordInput />
               <View style={loginStyles.buttonTextContainer}>
                  <Button size='lg'>Log in</Button>
                  <Text
                     style={{ color: theme.colors.link, textAlign: 'center' }}
                  >
                     Forgot password?
                  </Text>
               </View>
               <View style={loginStyles.buttonTextContainer}>
                  <Button size='lg' color='secondary'>
                     Sign in with Google
                  </Button>
                  <View style={loginStyles.navigationText}>
                     <Text>Don't have an account?</Text>
                     <Link style={loginStyles.link} to={{ screen: 'Signup' }}>
                        <Text style={{ color: theme.colors.link }}>
                           Create Account
                        </Text>
                     </Link>
                  </View>
               </View>
            </View>
         </View>
      </>
   );
};
