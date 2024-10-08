import { Link, router } from "expo-router";
import { Image } from 'expo-image';
import React, { useContext, useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AuthContext } from "@/context/authContext/AuthContext";
import { TextInput } from "react-native-paper";
import CustomModal from "@/components/CustomModal";
import { ModalProps } from "@/interfaces/postsInterfaces";

export default function Signin() {

    const insets = useSafeAreaInsets();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signIn } = useContext(AuthContext);
    const [modal, setModal] = useState({ visible: false } as ModalProps);

    useEffect(() => {
        // handleLoginAuto();
    }, [])

    const handleLoginAuto = async () => {
        setModal({
            visible: true,
            type: 'loading',
            title: 'Validando usuario',
            textBody: 'Espera un momento...'
        })
        const response = await signIn("hans.correa@correa.com", "123456789");
        if (response) {
            setModal({
                visible: false,
            })
            router.replace('/(tabs)/home');
        } else {
            setModal({
                visible: true,
                type: 'error',
                title: 'Hubo un error ingresand',
                textBody: 'Vuelve a intentarlo...',
                onAcept() {
                    setModal({
                        visible: false,
                    })
                },
                onClose() {
                    setModal({
                        visible: false,
                    })
                },
            })
            console.log("Hubo un error ingresando")
        }
    }

    const handleLogin = async () => {
        // router.replace('/(tabs)/home');
        setModal({
            visible: true,
            type: 'loading',
            title: 'Validando usuario',
            textBody: 'Espera un momento...'
        })
        const response = await signIn(email, password);
        if (response) {
            setModal({
                visible: false,
            })
            router.replace('/(tabs)/home');
        } else {
            setModal({
                visible: true,
                type: 'error',
                title: 'Hubo un error ingresand',
                textBody: 'Vuelve a intentarlo...'
            })
            console.log("Hubo un error ingresando")
        }
    }

    return (
        <ScrollView
            contentContainerStyle={{
                // flex: 1,
                flexGrow: 1
            }}
        >
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
                    onChangeText={text => setEmail(text)}
                    value={email}
                    style={styles.input}
                    placeholder="Ingresa tu correo electronico..."
                    label={"Correo electronico"}

                />
                <TextInput
                    onChangeText={text => setPassword(text)}
                    value={password}
                    style={styles.input}
                    placeholder="Ingresa tu contraseña..."
                    label={"Contraseña"}
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
            <CustomModal
                {...modal}
            />
        </ScrollView>
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
        paddingHorizontal: 20,
        margin: 10,
        borderColor: 'gray',
        backgroundColor: 'white',
        width: "100%",
        borderWidth: 1,
        borderRadius: 5
    }
})