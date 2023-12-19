import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabStack from "./TabStack";

const Stack = createNativeStackNavigator();
function RootStack() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen component={TabStack} name="tabs" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
