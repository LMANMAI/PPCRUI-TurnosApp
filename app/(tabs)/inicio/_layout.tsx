import { Stack } from "expo-router";

export default function InicioStackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="turnos" />
    </Stack>
  );
}
