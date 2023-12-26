import { View, Text } from "react-native";
import * as Icons from "react-native-heroicons/outline";
import React from "react";
import { colors } from "../../utils";

const Buttons = () => {
  return (
    <View
      style={{
        paddingVertical: 40,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          height: 70,
          width: 70,
          borderRadius: 20000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.yellow,
        }}
      >
        <Icons.ArrowDownLeftIcon color={colors.black} />
      </View>
      <View
        style={{
          height: 70,
          width: 70,
          borderRadius: 20000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.yellow,
        }}
      >
        <Icons.ArrowUpRightIcon color={colors.black} />
      </View>
      <View
        style={{
          height: 70,
          width: 70,
          borderRadius: 20000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.yellow,
        }}
      >
        <Icons.ArrowPathIcon color={colors.black} />
      </View>
      <View
        style={{
          height: 70,
          width: 70,
          borderRadius: 20000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.yellow,
        }}
      >
        <Icons.PlusIcon color={colors.black} />
      </View>
    </View>
  );
};

export default Buttons;
