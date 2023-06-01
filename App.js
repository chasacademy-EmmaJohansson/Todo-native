import HomePage from "./screens/HomePage";
import AddPage from "./screens/AddPage";
import Detail from "./screens/Detail";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={tw`w-full flex-1 justify-center`}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{
              headerStyle: {
                backgroundColor: "rgb(76 5 25)",
              },
            }}
          />
          <Stack.Screen
            name="AddPage"
            component={AddPage}
            options={{
              headerStyle: {
                backgroundColor: "rgb(76 5 25)",
              },
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              headerStyle: {
                backgroundColor: "rgb(76 5 25)",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
