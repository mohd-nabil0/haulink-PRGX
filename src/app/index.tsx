// app/index.tsx
import { Amplify, ResourcesConfig } from "aws-amplify";
import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';
import { sessionStorage } from 'aws-amplify/utils';
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";


import amplifyConfig from '@/aws/amplify-configuration.json';
import awsConfig from "@/aws/aws-exports";

const authConfig: ResourcesConfig['Auth'] = {
  Cognito: {
    userPoolId: "ap-south-1_8ByqypUKG",
    userPoolClientId: '4ban04k5iksnrbi7m854ckshu6'
  }
};

Amplify.configure({ ...awsConfig, ...amplifyConfig, auth: authConfig });
cognitoUserPoolsTokenProvider.setKeyValueStorage(sessionStorage);

export default function ScreenA() {
  const router = useRouter();

  useEffect(() => {
    // Any initial setup can be done here
    setTimeout(() => {
      router.replace("/login");
    }, 300);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size={"large"} />
    </View>
  );
}
