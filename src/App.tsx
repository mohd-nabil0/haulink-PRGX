import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { useColorScheme } from "react-native";
import "react-native-reanimated";

import Navigation from "./navigation";
import { navigationRef } from "./navigation/navigationRef";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require("./assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <Navigation
      ref={navigationRef}
      linking={{
        enabled: "auto",
        prefixes: [
          // Change the scheme to match your app's scheme defined in app.json
          "helloworld://",
        ],
      }}
      onReady={() => {
        SplashScreen.hideAsync();
      }}
    />
  );
};

export default App;
