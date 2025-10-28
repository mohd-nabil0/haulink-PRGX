import { Stack } from "expo-router";

export default function OnboardingRootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="ProfileInformation"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="VerifyIdentity" options={{ headerShown: false }} />
      <Stack.Screen name="DrivingLicense" options={{ headerShown: true }} />
    </Stack>
  );
}
