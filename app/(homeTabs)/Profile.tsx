import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button, useTheme } from "react-native-paper";

export default function Profile() {
  const theme = useTheme();

  const handleLogout = () => {
    router.replace("/ProfileInformation");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Tab</Text>
      <Button onPress={handleLogout} theme={theme} mode="contained-tonal">
        Logout
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
});
