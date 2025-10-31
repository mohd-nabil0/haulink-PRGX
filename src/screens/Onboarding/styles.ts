import { StyleSheet } from "react-native";
import { MD3Theme } from "react-native-paper";

const themedStyles = (theme: MD3Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});

export default themedStyles;
