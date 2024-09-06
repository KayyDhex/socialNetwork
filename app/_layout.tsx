import { Stack } from "expo-router";

export default function RootLayout() {

  /// -> -> -> -> -> ->   - Stack1
  //             -> ->  - Stack2
  //             -> ->  - Stack3
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Inicio' }} />
      <Stack.Screen name="singin" options={{ title: 'Registrate' }} />
      <Stack.Screen name="singup" options={{ title: 'Ingresa' }} />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}