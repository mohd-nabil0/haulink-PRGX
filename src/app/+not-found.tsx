import { StyleSheet, Text, View } from "react-native";

export default function ScreenNotFound() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page - Not Found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  link: { color: "blue", fontSize: 18 }
});
