import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Profile() {

  const handleLogout = () => {
    router.replace('/ProfileInformation');

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Tab</Text>
      <Button title="Logout"  onPress={handleLogout}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
});
