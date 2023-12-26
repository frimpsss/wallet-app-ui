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
  lightGray: "rgb(250, 250, 250)",
  creame: "rgb(249, 238, 213)",
  pink: "#7CB9E8",
  paleYellow: 'rgb(248, 249, 207)',
  yellow: 'rgb(233, 196, 120)', 
  grey: '#808080'
};

export const sizes = {
  screenWidth: Dimensions.get("screen").width,
  screenHeight: Dimensions.get("screen").height,
};
