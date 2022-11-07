import { Button, Image, Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { global } from '../../../style/global.styles';
import { mainStyles } from './styles';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WelcomeStackParamList } from '../../../../types/types';

type Props = NativeStackScreenProps<WelcomeStackParamList, 'Main'>;

export const Main = ({ navigation }: Props) => {
   const { theme } = useTheme();
   return (
      <View style={global.screenEnd}>
         <View style={mainStyles.headingContainer}>
            <Text style={[global.textCenter, global.gap]} h1>
               Welcome to MacroTrainer
            </Text>
            <Text style={[global.textCenter]}>
               We'll help you create a personal nutrition program to help you
               accomplish your goals.
            </Text>
         </View>
         <View style={mainStyles.imageContainer}>
            <Image
               style={mainStyles.image}
               source={require('./dietitian.png')}
            />
         </View>
         <View style={mainStyles.btnContainer}>
            {/* change back to signup */}
            <Button
               onPress={() => navigation.navigate('Age')}
               raised
               title='Get started'
               type='solid'
               size='lg'
            />
            <Button
               onPress={() => navigation.navigate('Login')}
               title='Log in'
               size='lg'
               titleStyle={{ color: theme.colors.black }}
               type='clear'
            />
         </View>
      </View>
   );
};
