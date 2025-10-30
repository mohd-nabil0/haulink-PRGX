import { useTranslation } from "@/localization/hooks/useTranslation";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button, useTheme } from "react-native-paper";

export default function ProfileInformation() {
  const router = useRouter();
  const theme = useTheme();
  const { t } = useTranslation();

  const navigateTo = () => {
    router.navigate("/verify-identity");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("welcome")}</Text>
      <Text style={styles.title}>Profile Information Screen</Text>
      <Button onPress={navigateTo} theme={theme} mode="contained">
        Next
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
});
