import { StyleSheet } from "react-native";
import { MD3Theme } from "react-native-paper";

const themedStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: "center",
      paddingHorizontal: 20,
      marginBottom: 20,
    },
    inputContainer: {
      flex: 1,
      width: "100%",
      alignItems: "center",
    },
    forgotPasswordDescText: {
      marginTop: 40,
      marginBottom: 16,
      fontSize: 16,
    },
    input: {
      width: "100%",
      marginTop: 8,
    },
    button: {
      width: "100%",
      height: 48,
      justifyContent: "center",
    },
    forgotPasswordText: {
      marginTop: 16,
      color: theme.colors.primary,
    },
    registerText: {
      alignSelf: "center",
      marginTop: 8,
      color: theme.colors.primary,
    },
  });

export default themedStyles;
