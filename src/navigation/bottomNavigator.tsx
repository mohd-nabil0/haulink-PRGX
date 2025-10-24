import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import Jobs from "@/screens/Jobs";
import Profile from "@/screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTabs = createBottomTabNavigator({
  screens: {
    Jobs: {
      screen: Jobs,
      options: {
        headerShown: false,
        tabBarIcon: ({ color }) => (
          //@ts-ignore
          <IconSymbol size={28} name="briefcase" color={color} />
        ),
      },
    },
    Profile: {
      screen: Profile,
      options: {
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <IconSymbol size={28} name="person" color={color} />
        ),
      },
    },
  },
  screenOptions: {
    headerShown: false,
    tabBarButton: HapticTab,
    tabBarBackground: TabBarBackground,
  },
});

export default BottomTabs;
