import { Button, LinearProgress, Text } from '@rneui/themed';
import { View } from 'react-native';
import { global } from '../../style/global.styles';

export const Signup = ({ navigation }) => {
   return (
      <View style={global.screenEnd}>
         <Text>this is the sign up screen</Text>
         <LinearProgress value={10} variant='determinate' />
         <Button
            onPress={() => navigation.navigate('MacroCalculator')}
            title={`Let's go`}
            size='lg'
            type='clear'
         />
      </View>
   );
};
