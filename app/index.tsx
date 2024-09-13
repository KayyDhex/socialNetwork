import { Link } from "expo-router";
import { Image } from 'expo-image';
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {

    const insets = useSafeAreaInsets();

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingTop: insets.top,
                paddingBottom: insets.bottom
            }}
        >
            <Image
                style={{
                    width: '100%',
                    height: 120,
                }}

                source={require("../assets/resources/Logo-Instagram.png")}
                // placeholder={{ blurhash }}
                contentFit="contain"
                transition={1000}
            />
            <Link href={"/signin"} asChild>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Iniciar sesion</Text>
                </TouchableOpacity>
            </Link>
            <Link href={"/signup"} asChild>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Registrate</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        textAlign: 'center'
    }
})