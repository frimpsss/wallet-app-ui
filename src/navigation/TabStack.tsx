import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { screens } from "../utils";
import { Home } from "../screen";
import { Wallet } from "../screen/wallet";
import { TabBar } from "../components";
import { Settings } from "../screen/settings";
import { Chart } from "../screen/charts";

const Tab = createBottomTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name={screens.home} component={Home} />
      <Tab.Screen name={screens.wallet} component={Wallet} />
      <Tab.Screen name={screens.settings} component={Settings} />
      <Tab.Screen name={screens.chart} component={Chart} />
    </Tab.Navigator>
  );
}

export default TabStack;
