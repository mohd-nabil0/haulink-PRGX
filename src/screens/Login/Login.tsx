import AppIcon from "@/assets/images/app-icon.svg";
import { handleAuthError } from "@/aws/auth/authErrorHandler";
import useAuth from "@/aws/auth/hooks/useAuth";
import SvgIcon from "@/components/SvgIcon";
import useSafeArea from "@/hooks/useSafeArea";
import { useTranslation } from "@/localization/hooks/useTranslation";
import { useRouter } from "expo-router";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import themedStyles from "./styles";

const initialUserInput = { username: "", password: "" };

const Login = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const safeAreaStyles = useSafeArea();
  const styles = themedStyles(theme);
  const { handleSignIn } = useAuth();
  const router = useRouter();

  const [userInput, setUserInput] = useState(initialUserInput);
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const handleLogin = async () => {
    try {
      const result = await handleSignIn(userInput.username, userInput.password);
      if (result?.isSignedIn) {
        alert("Login successful");
      }
    } catch (error) {
      const message = handleAuthError(error);
      alert(message);
    }
  };

  const handleForgotPassword = () => {
    setUserInput(initialUserInput);
    router.navigate("/forgot-password");
  };

  const handleRegister = () => {
    setUserInput(initialUserInput);
    router.navigate("/signup");
  };

  return (
    <View style={[styles.container, safeAreaStyles]}>
      <View style={styles.inputContainer}>
        <SvgIcon width={220} height={100}>
          <AppIcon />
        </SvgIcon>
        <TextInput
          label={t("phone_number")}
          mode="outlined"
          inputMode="tel"
          style={styles.input}
          onChangeText={(phoneNumber) =>
            setUserInput({ ...userInput, username: phoneNumber })
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
          onChangeText={(password) => setUserInput({ ...userInput, password })}
        />
        <Button style={styles.button} mode="contained" onPress={handleLogin}>
          {t("login")}
        </Button>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>
            {t("forgot_password_Q")}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.registerText}>{t("not_register_sign_up_now")}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
