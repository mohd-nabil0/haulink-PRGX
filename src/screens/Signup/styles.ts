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
    termsContainer: {
      width: "100%",
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
    roleContainer: {
      width: "100%",
      marginTop: 16,
    },
    role: {
      ...theme.fonts.headlineSmall
    },
    radioButtonContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 8,
    },
    radioButtonLabel: {
      fontSize: 16,
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
    termsText: {
      marginTop: 60,
      marginBottom: 16,
      color: theme.colors.primary,
    },
    codeDescText: {
      width: "100%",
      fontSize: 16,
    },
  });

export default themedStyles;
