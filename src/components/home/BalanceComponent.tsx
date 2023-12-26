import { View, Text } from "react-native";
import React from "react";
import { colors } from "../../utils";
import * as Icons from "react-native-heroicons/outline";

const BalanceComponent = () => {
  return (
    <View style={{
      paddingTop: 30
    }}>
      <Text
        style={{
          textAlign: "center",
          fontFamily: "poppins-regular",
          fontSize: 60,
          color: colors.paleYellow,
        }}
      >
        $23,338
      </Text>

      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            color: colors.white,
            fontFamily: "poppins-light",
          }}
        >
          Wallet id: 349494894
        </Text>
        <Icons.DocumentDuplicateIcon color={colors.white} height={15} />
      </View>
    </View>
  );
};

export default BalanceComponent;
