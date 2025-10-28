// app/index.tsx
import { Amplify } from "aws-amplify";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import awsConfig from "../src/aws/aws-exports";

Amplify.configure({ ...awsConfig });

export default function ScreenA() {
  const router = useRouter();

  useEffect(() => {
    // Any initial setup can be done here
    setTimeout(() => {
      router.replace("/ProfileInformation");
    }, 300);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size={"large"} />
    </View>
  );
}
