import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { colors, sizes } from "../../utils";
import * as Icons from "react-native-heroicons/outline";

const Header = () => {
  return (
    <SafeAreaView edges={["top"]}>
      <View
        style={{
          paddingVertical: 20,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: colors.white,
            fontFamily: "poppins-bold",
            fontSize: 24,
            fontWeight: "300",
          }}
        >
          Wallet
        </Text>

        <View
          style={{
            display: "flex",
            // justifyContent: ""
            flexDirection: "row",
            gap: 10,
          }}
        >
          <View
            style={{
              backgroundColor: colors.creame,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              width: 50,
              borderRadius: 20000,
            }}
          >
            <Icons.BellIcon color={colors.black} />
          </View>
          <View
            style={{
              backgroundColor: colors.pink,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              width: 50,
              borderRadius: 20000,
            }}
          >
            <Text
              style={{
                fontFamily: "poppins-bold",
                color: colors.white,
              }}
            >
              AF
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
