import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function VerifyIdentity() {
  const router = useRouter();

  const navigateTo = () => {
    router.navigate("/DrivingLicense");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Identity Screen</Text>
      <Button title="Next" onPress={navigateTo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
});
