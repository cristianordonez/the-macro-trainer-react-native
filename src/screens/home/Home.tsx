import { Button, Image, Text } from '@rneui/themed';
import { View } from 'react-native';
import { global } from '../../style/global.styles';
import { homeStyles } from './styles';

export const Home = ({ navigation }) => {
   return (
      <View style={global.screenEnd}>
         <View style={homeStyles.headingContainer}>
            <Text style={[global.textCenter, global.gap]} h1>
               Welcome to MacroTrainer
            </Text>
            <Text style={[global.textCenter]}>
               We'll help you create a personal nutrition program to help you
               accomplish your goals.
            </Text>
         </View>
         <View style={homeStyles.imageContainer}>
            <Image
               style={homeStyles.image}
               source={require('./dietitian.png')}
            />
         </View>
         <View style={homeStyles.btnContainer}>
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
               type='clear'
            />
         </View>
      </View>
   );
};
