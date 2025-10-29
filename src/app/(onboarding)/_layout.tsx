import { Stack } from "expo-router";

export default function OnboardingRootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="profile-information"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="verify-identity" options={{ headerShown: false }} />
      <Stack.Screen name="driving-license" options={{ headerShown: true }} />
    </Stack>
  );
}
