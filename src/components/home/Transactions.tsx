import { View, Text, FlatList } from "react-native";
import React from "react";
import { colors } from "../../utils";
import * as Icons from "react-native-heroicons/outline";
const Transactions = () => {
  const sampleAssets = [
    {
      name: "Binance",
      percentage: "22.30",
      percentageAmount: "23,345",
      amount: "1000.00",
      totalPrice: "23.45 BNB",
      icon: <Icons.CubeTransparentIcon color={colors.white} />,
      color: "gold",
    },
    {
      name: "Ethereum",
      percentage: "22.30",
      percentageAmount: "23,345",
      amount: "1000.00",
      totalPrice: "12.89 ETH",
      icon: <Icons.CubeTransparentIcon color={colors.white} />,
      color: "orange",
    },
    {
      name: "Tether usd",
      percentage: "22.30",
      percentageAmount: "23,345",
      amount: "1000.00",
      totalPrice: "23.45 ETH",
      icon: <Icons.CubeTransparentIcon color={colors.white} />,
      color: "#3F704D",
    },
  ];
  return (
    <View
      style={{
        backgroundColor: colors.white,
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 32,
      }}
    >
      <View
        style={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: colors.primary,
          height: 60,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: colors.white,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "poppins-semibold",
                fontSize: 15,
              }}
            >
              My Assets
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            borderTopRightRadius: 30,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: colors.primary,
              borderBottomLeftRadius: 39,
              borderTopRightRadius: 30,
              borderColor: colors.primary,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "poppins-semibold",
                fontSize: 15,
                color: colors.lightGray,
              }}
            >
              My Transactions
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: colors.primary,
        }}
      >
        <View
          style={{
            flex: 1,
            borderTopRightRadius: 40,
            backgroundColor: colors.white,
            paddingTop: 30,
          }}
        >
          <FlatList
            data={sampleAssets}
            ItemSeparatorComponent={() => {
              return (
                <View
                  style={{
                    height: 10,
                  }}
                ></View>
              );
            }}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    paddingHorizontal: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 20,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: item.color,
                        display: "flex",
                        padding: 18,
                        borderRadius: 2000,
                      }}
                    >
                      {item.icon}
                    </View>
                    <View
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        gap: 3,
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          fontFamily: "poppins-bold",
                          fontSize: 16,
                        }}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          textAlign: "center",
                          fontFamily: "poppins-light",
                          color: colors.grey,
                        }}
                      >
                        {item.percentage}% (${item.percentageAmount})
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      gap: 3,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontFamily: "poppins-regular",
                        fontSize: 16,
                      }}
                    >
                      {item.totalPrice}
                    </Text>
                    <Text
                      style={{
                        textAlign: "center",
                        fontFamily: "poppins-light",
                        color: colors.grey,
                      }}
                    >
                      ${item.amount}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Transactions;
