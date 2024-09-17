import { Stack } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function RootLayout() {

  return (
    <Stack
    >
      <Stack.Screen name="index"
        options={({ navigation }) => ({
          title: "Instagram",
          headerRight: () => <View
            style={{ flexDirection: 'row', gap: 10 }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("notifications")}><MaterialIcons name="notifications" size={24} color="black" /></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("message")}><MaterialIcons name="chat" size={24} color="black" /></TouchableOpacity>
          </View>
        })}
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