import BottomTabs from "@/navigation/bottomNavigator";
import { RootStackParamsList } from "@/navigation/types";
import Explore from "@/screens/Profile";
import {
  createStaticNavigation
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const RootStack = createNativeStackNavigator<RootStackParamsList>({
  screens: {
    HomeTab: {
      screen: BottomTabs,
      options: {
        headerShown: false,
      },
    },
    Explore: {
      screen: Explore,
      options: {
        headerShown: false,
      },
    }
  },
});

const Navigation = createStaticNavigation(RootStack);
export default Navigation;