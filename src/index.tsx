import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import App from "./App";

export default function Main() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </PaperProvider>
  );
}
