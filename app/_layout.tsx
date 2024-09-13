import { AuthProvider } from "@/context/authContext/AuthContext";
import { Stack } from "expo-router";
import "../utils/firebaseConfig";

export default function RootLayout() {

  /// -> -> -> -> -> ->   - Stack1
  //             -> ->  - Stack2
  //             -> ->  - Stack3
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Inicio' }} />
        <Stack.Screen name="singin" options={{ title: 'Registrate' }} />
        <Stack.Screen name="singup" options={{ title: 'Ingresa' }} />
        {/* Cuando el usuario se loggea */}
        <Stack.Screen name="(tabs)" />
      </Stack>
    </AuthProvider>
  );
}