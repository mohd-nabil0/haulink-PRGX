import { MD3LightTheme as DefaultLightTheme, MD3Theme } from "react-native-paper";
import { colors } from "./colors";
import { fonts } from "./fonts";

export const AppThemeLight: MD3Theme = {
  ...DefaultLightTheme,
  roundness: 0,
  colors: colors.light,
  fonts: fonts
};