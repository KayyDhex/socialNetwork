import CustomAppBar from "@/components/appBar/CustomAppBar";
import { Stack } from "expo-router";

export default function RootLayout() {

  return (
    <Stack
      screenOptions={{
        header: () => <CustomAppBar />
      }}
    >
      <Stack.Screen name="index"
        options={{
          title: "Instagram",
          headerShown: false
        }}
      />
      <Stack.Screen name="edit" />
    </Stack>
  );
}