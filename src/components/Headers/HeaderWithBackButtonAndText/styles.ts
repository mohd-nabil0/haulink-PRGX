import Constants from "expo-constants";
import { StyleSheet } from "react-native";
import { MD3Theme } from "react-native-paper";

const statusBarHeight = Constants.statusBarHeight;

const themedStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      backgroundColor: theme.colors.background,
      height: statusBarHeight,
      flexDirection: "row",
      alignItems: "center",
    },
    backButtonContainer: {
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      marginLeft: 16,
      ...theme.fonts.headlineLarge,
    },
  });

export default themedStyles;
