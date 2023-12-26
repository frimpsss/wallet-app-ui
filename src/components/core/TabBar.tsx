import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as Icons from "react-native-heroicons/outline";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, screens, sizes } from "../../utils";
function TabBar({ descriptors, navigation, state }: BottomTabBarProps) {
  return (
    <SafeAreaView
      edges={["bottom"]}
      style={{
        backgroundColor: colors.white,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: colors.white,
          paddingBottom: 7,
          paddingTop: 10,
          width: sizes.screenWidth,
          paddingHorizontal: sizes.screenWidth / 50,
          borderTopColor: colors.lightGray, 
          borderTopWidth: 2,
        }}
      >
        {state.routes.map((route: any, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const isFocused = state.index == index;

          function onPress() {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          }
          function onLongPress() {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          }
          function renderIcons(label: string) {
            switch (label) {
              case screens.home:
                return (
                  <Icons.HomeIcon
                    size={25}
                    color={isFocused ? colors.primary : colors.black}
                  />
                );
              case screens.wallet:
                return (
                  <Icons.WalletIcon
                    size={25}
                    color={isFocused ? colors.primary : colors.black}
                  />
                );
              case screens.chart:
                return (
                  <Icons.ChartPieIcon
                    size={25}
                    color={isFocused ? colors.primary : colors.black}
                  />
                );
              case screens.settings:
                return (
                  <Icons.Cog8ToothIcon
                    size={25}
                    color={isFocused ? colors.primary : colors.black}
                  />
                );
            }
          }
          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flexDirection: "column",
                alignItems: "center",
                gap: 5,
                flex: 1
              }}
            >
              {renderIcons(label)}
              <Text
                style={{
                  fontSize: 15,
                  color: isFocused ? colors.primary : colors.black,
                  fontWeight: isFocused ? "500" : "300",
                  fontFamily: !isFocused ? 'poppins-light': "poppins-regular"
                }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

export default TabBar;
