import { AppThemeLight } from "@/theme";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

export default function RootLayout() {
  const paperTheme = AppThemeLight;
  
  return (
    <PaperProvider theme={paperTheme}>
      <Stack screenOptions={{ headerShown: false }}></Stack>
    </PaperProvider>
  );
}
