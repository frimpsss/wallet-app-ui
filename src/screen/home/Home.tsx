import { View, Text } from "react-native";
import React from "react";
import { colors } from "../../utils";
import Header from "../../components/home/Header";
import BalanceComponent from "../../components/home/BalanceComponent";
import Buttons from "../../components/home/Buttons";
import Transactions from "../../components/home/Transactions";

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        paddingHorizontal: 12,
      }}
    >
      <View
        style={{
          paddingHorizontal: 10,
        }}
      >
        <Header />
        <BalanceComponent />
        <Buttons />
      </View>
      <Transactions />
    </View>
  );
};

export default Home;
