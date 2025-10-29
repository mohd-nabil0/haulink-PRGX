import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button, useTheme } from "react-native-paper";

export default function DrivingLicense() {
  const router = useRouter();
  const theme = useTheme();

  const navigateToRoot = () => {
    router.dismissAll();
  };

  const navigateToHome = () => {
    router.replace("/(homeTabs)/Jobs");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Driving License Screen</Text>
      <Button onPress={navigateToRoot} theme={theme} mode="outlined">
        Cancel
      </Button>
      <Button onPress={navigateToHome} theme={theme} mode="contained">
        Done
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
});
