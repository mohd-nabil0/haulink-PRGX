import { StyleSheet } from "react-native";
import { MD3Theme } from "react-native-paper";

const themedStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      justifyContent: "center",
      alignItems: "center",
    },
    inputContainer: {
      flex: 1,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
    },
    input: {
      width: "100%",
      marginTop: 8,
    },
    button: {
      width: "100%",
      height: 48,
      justifyContent: "center",
      marginTop: 32,
    },
    forgotPasswordText: {
      marginTop: 16,
      color: theme.colors.primary,
    },
    registerText: {
      alignSelf: "center",
      color: theme.colors.primary,
      marginBottom: 20,
    },
  });

export default themedStyles;
