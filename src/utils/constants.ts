import { Dimensions } from "react-native";

export const screens = {
  home: "Home",
  wallet: "Wallet",
  chart: "Chart",
  settings: "Settings",
};

export const colors = {
  primary: "rgb(198, 109,76)",
  white: "rgb(255, 255, 255)",
  black: "rgb(0, 0, 0)",
  lightGray: 'rgb(250, 250, 250)'
};

export const sizes = {
  screenWidth: Dimensions.get("screen").width,
  screenHeight: Dimensions.get("screen").height,
};
