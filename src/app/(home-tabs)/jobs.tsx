import useAuthState from "@/aws/auth/hooks/useAuthState";
import { StyleSheet, Text, View } from "react-native";

export default function Jobs() {

  const authState = useAuthState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobs Tab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
});
