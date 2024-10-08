import { Stack } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import CustomPrincipalAppBar from "@/components/appBar/CustomPrincipalAppBar";
import CustomAppBar from "@/components/appBar/CustomAppBar";

export default function RootLayout() {

  return (
    <Stack
      screenOptions={{
        header: () => <CustomAppBar />
      }}
    >
      <Stack.Screen name="index"
        options={{
          header: () => (<CustomPrincipalAppBar type="home" />)
        }}
      />
      <Stack.Screen name="message"
        options={{
          title: "Mensajes",

        }}
      />
      <Stack.Screen name="notifications"
        options={{
          title: "Notificaciones",
        }}
      />
    </Stack>
  );
}