import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function ProfileInformation() {
  const router = useRouter();

  const navigateTo = () => {
    router.navigate("/VerifyIdentity");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Information Screen</Text>
      <Button title="Next" onPress={navigateTo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
});
