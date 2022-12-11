import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { WelcomeStackParamList } from '../../../../types/types';
import { CustomText } from '../../../components/custom-text/CustomText';
import { LoadingImage } from '../../../components/loading-image/LoadingImage';
import { global } from '../../../style/global.styles';
import { mainStyles } from './styles';

type Props = NativeStackScreenProps<WelcomeStackParamList, 'Main'>;

export const Main = ({ navigation }: Props) => {
   const { theme } = useTheme();
   return (
      <View style={global.screenEnd}>
         <View style={mainStyles.headingContainer}>
            <CustomText
               textAlign='center'
               h0={true}
               gap={true}
               fontFamily='Lato_Bold'
               humanText='Welcome to MacroTrainer'
            />
            <CustomText
               h2={true}
               textAlign='center'
               humanText="We'll help you create a personal nutrition program to help you
               accomplish your goals."
            />
         </View>

         <View style={mainStyles.imageContainer}>
            <LoadingImage />
         </View>
         <View style={mainStyles.btnContainer}>
            <Button
               onPress={() => navigation.navigate('Signup')}
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
