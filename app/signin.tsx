import { Link, router } from "expo-router";
import { Image } from 'expo-image';
import React, { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AuthContext } from "@/context/dataContext/AuthContext";

export default function Signin() {

    const insets = useSafeAreaInsets();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signIn } = useContext(AuthContext);

    const handleLogin = async () => {
        router.replace('/(tabs)/home');
        // const response = await signIn(email, password);
        // if (response) {
        //     router.replace('/(tabs)/home');
        // } else {
        //     console.log("Hubo un error ingresando")
        // }
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: insets.bottom,
                paddingHorizontal: 30
            }}
        >
            <Image
                style={{
                    width: '100%',
                    height: 120,
                }}

                source={require("../assets/resources/Logo-Instagram.png")}
                contentFit="contain"
                transition={1000}
            />
            <TextInput
                editable
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="Ingresa tu email..."
                style={styles.input}
            />
            <TextInput
                onChangeText={text => setPassword(text)}
                value={password}
                style={styles.input}
                placeholder="Ingresa tu contraseña..."
            />
            <Button
                onPress={handleLogin}
                title="Entrar"
            />
            <View
                style={{
                    position: 'absolute',
                    bottom: insets.bottom,
                    borderTopWidth: 1,
                    borderTopColor: 'grey',
                    width: "100%",
                    paddingTop: 10
                }}
            >
                <Text
                    style={{ textAlign: 'center' }}
                >Don't have an account? <Link href={"/signup"} style={{ color: "blue" }}>Sign Up</Link>.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    input: {
        padding: 10,
        paddingHorizontal: 20,
        margin: 10,
        borderColor: 'gray',
        width: "100%",
        borderWidth: 1,
        borderRadius: 5
    }
})