import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function DrivingLicense() {
  const router = useRouter();

  const navigateToRoot = () => {
    router.dismissAll();
  };

  const navigateToHome = () => {
    router.replace("/(homeTabs)/Jobs");
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Driving License Screen</Text>
      <Button title="Cancel" onPress={navigateToRoot} />
      <Button title="Done" onPress={navigateToHome} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
});
