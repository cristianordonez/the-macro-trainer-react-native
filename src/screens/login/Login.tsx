import { Button } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ArrowBack } from '../../components/ArrowBack';

export const Login = ({ navigation }) => {
   return (
      <View style={styles.container}>
         <ArrowBack navigation={navigation} />
         <Text>this is the login screen</Text>
         <StatusBar style='auto' />
         <Button>this is a test btn</Button>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
});
