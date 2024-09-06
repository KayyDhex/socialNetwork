import { Link } from "expo-router";
import { Button, Pressable, Text, View } from "react-native";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Bienvenido a Instagram</Text>
            <Link href={"/singup"} asChild>
                <Button
                    title="Ingresar"
                />
            </Link>
            <Link href={"/singin"} asChild>
                <Button
                    title="Registrate"
                />
            </Link>
        </View>
    );
}