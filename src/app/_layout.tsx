import { TranslationProvider } from "@/localization/translation-context";
import { AppThemeLight } from "@/theme";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

export default function RootLayout() {
  const appTheme = AppThemeLight;

  return (
    <PaperProvider theme={appTheme}>
      <TranslationProvider>
        <Stack screenOptions={{ headerShown: false }}></Stack>
      </TranslationProvider>
    </PaperProvider>
  );
}
