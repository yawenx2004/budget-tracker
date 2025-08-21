import { Stack } from "expo-router";

export default function RootLayout() {
	// TODO replace with AsyncStorage logic later in order to render onboarding once
  const hasOnboarded = false;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {!hasOnboarded ? (
        <Stack.Screen name="onboarding" />
      ) : (
        <Stack.Screen name="(tabs)" />
      )}
    </Stack>
  )
}