import { StyleSheet, Text, View } from "react-native";
import { Root } from "./src/navigation";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [fontLoaded] = useFonts({
    "poppins-black": require("./assets/fonts/Poppins-Black.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "poppins-extrabold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "poppins-extralight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "poppins-light": require("./assets/fonts/Poppins-Light.ttf"),
    "poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "poppins-regular": require("./assets/fonts/Poppins-Medium.ttf"),
    "poppins-semibold": require("./assets/fonts/Poppins-Medium.ttf"),
    "poppins-thin": require("./assets/fonts/Poppins-Thin.ttf"),
  });
  if (!fontLoaded) return null;
  return (
    <SafeAreaView style={styles.container}>
      <Root />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
