import AppIcon from "@/assets/images/app-icon.svg";
import { handleAuthError } from "@/aws/auth/authErrorHandler";
import useAuth from "@/aws/auth/hooks/useAuth";
import { AuthService } from "@/aws/auth/services/authService";
import HeaderWithBackButtonAndText from "@/components/Headers/HeaderWithBackButtonAndText";
import SvgIcon from "@/components/SvgIcon";
import useSafeArea from "@/hooks/useSafeArea";
import { useTranslation } from "@/localization/hooks/useTranslation";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import {
  Button,
  RadioButton,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
import themedStyles from "./styles";

const Signup = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const safeAreaStyles = useSafeArea();
  const styles = themedStyles(theme);
  const { handleSignUp, handleConfirmationSignUp } = useAuth();

  const [userInput, setUserInput] = useState({
    phoneNumber: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    role: "",
    code: "",
  });
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(true);

  const handleSignup = async () => {
    try {
      const result = await handleSignUp(
        userInput.phoneNumber,
        userInput.password,
        {
          phone_number: userInput.phoneNumber,
          family_name: userInput.lastName,
          given_name: userInput.firstName,
          email: "testnabil89@gmail.com",
          "custom:role": userInput.role,
        }
      );
      if (result?.isSignUpComplete) {
        alert("Signup successful");
        handleAutoSignInAndRedirect();
      } else if (result.nextStep.signUpStep === "CONFIRM_SIGN_UP") {
        alert(
          `Confirmation code sent to ${result.nextStep.codeDeliveryDetails.destination}`
        );
        setIsCodeSent(true);
      }
    } catch (error) {
      console.log(error);
      const message = handleAuthError(error);
      alert(message);
    }
  };

  const handleConfirmationSignup = async () => {
    try {
      await handleConfirmationSignUp(userInput.phoneNumber, userInput.code);
      alert("Signup confirmed successfully");
      handleAutoSignInAndRedirect();
    } catch (error) {
      console.log(error);
      const message = handleAuthError(error);
      alert(message);
    }
  };

  const handleAutoSignInAndRedirect = async () => {
    await AuthService.autoSignIn();
    router.replace("/(home-tabs)/jobs");
  };

  const enableSignupButton = () => {
    const {
      phoneNumber,
      password,
      confirmPassword,
      firstName,
      lastName,
      role,
    } = userInput;
    const valid = [
      phoneNumber,
      password,
      confirmPassword,
      firstName,
      lastName,
      role,
    ].every((field) => field !== "");
    return valid && password === confirmPassword;
  };
  return (
    <View style={[styles.container, safeAreaStyles]}>
      <HeaderWithBackButtonAndText
        title="Signup"
        onBackPress={() => router.back()}
      />
      <SvgIcon width={220} height={100}>
        <AppIcon />
      </SvgIcon>
      <View style={styles.inputContainer}>
        {isCodeSent ? (
          <>
            <Text style={styles.codeDescText}>
              {t("enter_your_verification_code")}
            </Text>
            <TextInput
              key={"code"}
              label={t("code")}
              mode="outlined"
              inputMode="numeric"
              style={styles.input}
              onChangeText={(code) => setUserInput({ ...userInput, code })}
            />
          </>
        ) : (
          <>
            <TextInput
              label={t("phone_number")}
              mode="outlined"
              inputMode="tel"
              style={styles.input}
              onChangeText={(phoneNumber) =>
                setUserInput({ ...userInput, phoneNumber })
              }
            />
            <TextInput
              label={t("first_name")}
              mode="outlined"
              style={styles.input}
              onChangeText={(firstName) =>
                setUserInput({ ...userInput, firstName })
              }
            />
            <TextInput
              label={t("last_name")}
              mode="outlined"
              style={styles.input}
              onChangeText={(lastName) =>
                setUserInput({ ...userInput, lastName })
              }
            />
            <TextInput
              label={t("password")}
              mode="outlined"
              secureTextEntry={isPasswordVisible}
              style={styles.input}
              right={
                <TextInput.Icon
                  icon={isPasswordVisible ? "eye-off" : "eye"}
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                />
              }
              onChangeText={(password) =>
                setUserInput({ ...userInput, password })
              }
            />
            <TextInput
              label={t("confirm_password")}
              mode="outlined"
              secureTextEntry={isConfirmPasswordVisible}
              style={styles.input}
              error={
                !!userInput.confirmPassword &&
                userInput.confirmPassword !== userInput.password
              }
              right={
                <TextInput.Icon
                  icon={isConfirmPasswordVisible ? "eye-off" : "eye"}
                  onPress={() =>
                    setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                  }
                />
              }
              onChangeText={(confirmPassword) =>
                setUserInput({ ...userInput, confirmPassword })
              }
            />

            <View style={styles.roleContainer}>
              <Text style={styles.role}>{t("choose_role")}</Text>
              <RadioButton.Group
                onValueChange={(role) => setUserInput({ ...userInput, role })}
                value={userInput.role}
              >
                <View style={styles.radioButtonContainer}>
                  <RadioButton value="hauler" />
                  <Text style={styles.radioButtonLabel}>{t("hauler")}</Text>
                </View>
                <View style={styles.radioButtonContainer}>
                  <RadioButton value="contractor" />
                  <Text style={styles.radioButtonLabel}>{t("contractor")}</Text>
                </View>
              </RadioButton.Group>
            </View>
          </>
        )}
      </View>

      <View style={styles.termsContainer}>
        {!isCodeSent && (
          <Text style={styles.termsText}>
            {t("by_continuing_you_accept_to_our_policy_terms")}
          </Text>
        )}
        <Button
          style={styles.button}
          mode="contained"
          disabled={!isCodeSent && enableSignupButton() === false}
          onPress={isCodeSent ? handleConfirmationSignup : handleSignup}
        >
          {t(isCodeSent ? "confirm" : "sign_up")}
        </Button>
      </View>
    </View>
  );
};
export default Signup;
