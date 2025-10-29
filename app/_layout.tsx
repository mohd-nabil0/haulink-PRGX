import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { AppThemeLight } from "../src/theme";

export default function RootLayout() {
  const paperTheme = AppThemeLight;
  
  return (
    <PaperProvider theme={paperTheme}>
      <Stack screenOptions={{ headerShown: false }}></Stack>
    </PaperProvider>
  );
}
