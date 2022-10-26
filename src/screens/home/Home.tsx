import { Button, Text } from '@rneui/themed';
import { View } from 'react-native';
import { Logo } from '../../components/logo/Logo';
import { global } from '../../style/global.styles';
import { homeStyles } from './styles';

export const Home = ({ navigation }) => {
   return (
      <View style={global.screenCenter}>
         <View style={homeStyles.headingContainer}>
            <Logo />
            <Text h1>The MacroTrainer</Text>
            <Text style={global.textCenter}>
               Find foods with your desired macronutrient range
            </Text>
         </View>
         <View style={homeStyles.btnContainer}>
            <Button
               onPress={() => navigation.navigate('GetStarted')}
               raised
               title='Get started'
               type='solid'
            />
            <Button
               onPress={() => navigation.navigate('Login')}
               title='Log in'
               type='clear'
            />
         </View>
      </View>
   );
};
