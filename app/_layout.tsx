import { Stack } from "expo-router";
import "../utils/firebaseConfig";
import { AuthProvider } from "@/context/authContext/AuthContext";
import { MD3LightTheme, PaperProvider } from "react-native-paper";

export default function RootLayout() {

  const theme = {
    ...MD3LightTheme,
    roundness: 10,

    colors: {
      ...MD3LightTheme.colors,
      primary: '#E90935',
      primaryContainer: "#FFF",
      secondary: '#383838',
      secondaryContainer: "#FFF",
      tertiary: '#252537',
      surface: "#919EAB52",
      background: "#FFFFFF"
    }
  };

  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <Stack
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="signin"
        >
          <Stack.Screen name="index" options={{ title: 'Ingresa' }} />
          {/* <Stack.Screen name="signin" options={{ title: 'Ingresa' }} /> */}
          <Stack.Screen name="signup" options={{ title: 'Registrate' }} />
          {/* Cuando el usuario se loggea */}
          <Stack.Screen name="(tabs)" />
        </Stack>
      </AuthProvider>
    </PaperProvider>
  );
}