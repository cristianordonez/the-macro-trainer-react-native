import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { ArrowBack } from "../components/ArrowBack";

export const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ArrowBack navigation={navigation} />
      <Text>this is the login screen</Text>
      <StatusBar style="auto" />
      <Button mode="contained">this is a test btn</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
