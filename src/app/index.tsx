// app/index.tsx
import awsConfig from "@/aws/aws-exports";
import { Amplify } from "aws-amplify";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

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
