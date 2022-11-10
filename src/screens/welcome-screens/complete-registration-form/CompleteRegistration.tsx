import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import { WelcomeStackParamList } from '../../../../types/types';
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
   console.log('route.params: ', route.params);
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
               placeholder='Username'
               secureTextEntry={false}
               keyboardType='default'
               iconName='user'
               iconType='ant-design'
               label='Username'
               textContentType='username'
            />
            <CustomInput
               placeholder='Email'
               secureTextEntry={false}
               keyboardType='email-address'
               iconName='email'
               iconType='material-community'
               label='Email'
               textContentType='emailAddress'
            />
            <CustomInput
               placeholder='Password'
               secureTextEntry={true}
               keyboardType='default'
               iconName='key'
               iconType='entypo'
               label='Password'
               textContentType='password'
            />
            <CustomInput
               placeholder='Confirm Password'
               secureTextEntry={true}
               keyboardType='default'
               iconName='key'
               iconType='entypo'
               label='Confirm Password'
               textContentType='password'
            />
         </View>
         {/* <Button
            onPress={() => navigation.navigate('Main')}
            title={`Create Account`}
            size='lg'
            type='submit'
         /> */}
         {/* <input type='submit' /> */}
      </View>
   );
};
