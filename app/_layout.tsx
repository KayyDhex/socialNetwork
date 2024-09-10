import { Stack } from "expo-router";
import "../utils/firebaseConfig";
import { AuthProvider } from "@/context/dataContext/AuthContext";

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
        <Stack.Screen name="signin" options={{ title: 'Registrate' }} />
        <Stack.Screen name="signup" options={{ title: 'Ingresa' }} />
        {/* Cuando el usuario se loggea */}
        <Stack.Screen name="(tabs)" />
      </Stack>
    </AuthProvider>
  );
}