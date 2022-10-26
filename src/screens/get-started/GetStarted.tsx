import { Text } from '@rneui/themed';
import { View } from 'react-native';
import { ArrowBack } from '../../components/ArrowBack';
import { global } from '../../style/global.styles';
export const GetStarted = ({ navigation }) => {
   return (
      <View style={global.screenContainer}>
         <ArrowBack navigation={navigation} />
         <Text>this is the get started screen</Text>
      </View>
   );
};

// const styles = StyleSheet.create({
//    container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//    },
// });
