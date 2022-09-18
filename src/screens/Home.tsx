import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text variant="displayMedium" style={styles.text}>
          The Diabetes Calculator
        </Text>
        <Text style={styles.text}>
          Your way to better mange your blood sugar levels
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Button
          onPress={() => navigation.navigate("GetStarted")}
          mode="contained"
          style={styles.btn}
        >
          Get started
        </Button>
        <Button onPress={() => navigation.navigate("Login")} mode="text">
          Log in
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: "1%",
  },
  btn: {
    width: "100%",
    alignSelf: "stretch",
  },
  text: {
    textAlign: "center",
  },
  headingContainer: {
    flex: 3,
    alignContent: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
});
