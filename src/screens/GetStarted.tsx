import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { ArrowBack } from "../components/ArrowBack";

export const GetStarted = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ArrowBack navigation={navigation} />
      <Text>this is the get started screen</Text>
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
