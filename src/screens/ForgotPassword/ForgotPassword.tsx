import AppIcon from "@/assets/images/app-icon.svg";
import { handleAuthError } from "@/aws/auth/authErrorHandler";
import useAuth from "@/aws/auth/hooks/useAuth";
import HeaderWithBackButtonAndText from "@/components/Headers/HeaderWithBackButtonAndText";
import SvgIcon from "@/components/SvgIcon";
import useSafeArea from "@/hooks/useSafeArea";
import { useTranslation } from "@/localization/hooks/useTranslation";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import themedStyles from "./styles";

const ForgotPassword = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const safeAreaStyles = useSafeArea();
  const styles = themedStyles(theme);
  const { handleResetPassword, handleConfirmResetPassword } = useAuth();

  const [userInput, setUserInput] = useState({
    username: "",
    code: "",
    newPassword: "",
  });
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const handleForgotPassword = async () => {
    try {
      const result = await handleResetPassword(userInput.username);
      if (result?.isPasswordReset) {
        alert("Password reset successful");
      } else if (
        result.nextStep.resetPasswordStep === "CONFIRM_RESET_PASSWORD_WITH_CODE"
      ) {
        alert(
          `Confirmation code sent to ${result.nextStep.codeDeliveryDetails.destination}`
        );
        setIsCodeSent(true);
      }
    } catch (error) {
      const message = handleAuthError(error);
      alert(message);
    }
  };

  const handleConfirmCode = async () => {
    try {
      await handleConfirmResetPassword(
        userInput.username,
        userInput.code,
        userInput.newPassword
      );
      alert("Password reset successful");
      router.dismissAll();
    } catch (error) {
      const message = handleAuthError(error);
      alert(message);
    }
  };

  return (
    <View style={[styles.container, safeAreaStyles]}>
      <HeaderWithBackButtonAndText
        title="Forgot Password"
        onBackPress={() => router.back()}
      />
      <SvgIcon width={220} height={100}>
        <AppIcon />
      </SvgIcon>
      <View style={styles.inputContainer}>
        <Text style={styles.forgotPasswordDescText}>
          {t("enter_register_number_to_reset_password")}
        </Text>
        <TextInput
          label={t("phone_number")}
          mode="outlined"
          inputMode="tel"
          style={styles.input}
          disabled={isCodeSent}
          onChangeText={(phoneNumber) =>
            setUserInput({ ...userInput, username: phoneNumber })
          }
        />
        {isCodeSent && (
          <>
            <TextInput
              label={t("code")}
              mode="outlined"
              inputMode="numeric"
              style={styles.input}
              onChangeText={(code) => setUserInput({ ...userInput, code })}
            />
            <TextInput
              label={t("new_password")}
              mode="outlined"
              secureTextEntry={isPasswordVisible}
              style={styles.input}
              right={
                <TextInput.Icon
                  icon={isPasswordVisible ? "eye-off" : "eye"}
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                />
              }
              onChangeText={(newPassword) =>
                setUserInput({ ...userInput, newPassword })
              }
            />
          </>
        )}
      </View>
      <Button
        style={styles.button}
        mode="contained"
        onPress={isCodeSent ? handleConfirmCode : handleForgotPassword}
      >
        {t(isCodeSent ? "update_password" : "send_otp")}
      </Button>
    </View>
  );
};

export default ForgotPassword;
