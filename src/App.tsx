import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GetStarted } from "./screens/GetStarted";
import { Home } from "./screens/Home";
import { Login } from "./screens/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </>
  );
}
