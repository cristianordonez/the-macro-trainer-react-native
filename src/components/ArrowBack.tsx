import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { View } from "react-native";

export const ArrowBack = ({ navigation }) => {
  return (
    <View>
      <SimpleLineIcons
        onPress={() => navigation.goBack()}
        name="arrow-left"
        size={32}
      />
    </View>
  );
};
