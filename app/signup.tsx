import { View, Text, StyleSheet, Button, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import { Link, router } from 'expo-router'
import { TextInput } from 'react-native-paper'
import { AuthContext } from '@/context/authContext/AuthContext'
import { ModalProps } from '@/interfaces/postsInterfaces'
import CustomModal from '@/components/CustomModal'

export default function Signup() {

    const { signUp } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [username, setUsername] = useState("");
    const [modal, setModal] = useState({ visible: false } as ModalProps);

    const handleRegister = async () => {

        if (repeatPassword != password) {
            setModal({
                visible: true,
                type: 'error',
                title: 'Hubo un error registrandote',
                textBody: 'Las contraseñas no coinciden'
            })
            return;
        }
        if (repeatPassword == "" || password == "" || email == "" || username == "") {
            setModal({
                visible: true,
                type: 'error',
                title: 'Hubo un error registrandote',
                textBody: 'Llena todos los campos'
            })
            return;
        }

        setModal({
            visible: true,
            type: 'loading',
            title: 'Validando usuario',
            textBody: 'Espera un momento...'
        })
        try {
            const response = await signUp(email, password, username);
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
        } catch (error) {
            console.log(error);
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
                style={styles.container}
            >
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 24,
                        textAlign: 'center'
                    }}
                >Registrate</Text>
                <TextInput
                    onChangeText={text => setUsername(text)}
                    value={username}
                    style={styles.input}
                    placeholder="Ingresa tu nombre de usuario..."
                    label={"Usuario"}
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
                <TextInput
                    onChangeText={text => setRepeatPassword(text)}
                    value={repeatPassword}
                    style={styles.input}
                    placeholder="Ingresa tu contraseña..."
                    label={"Repite tu contraseña"}
                />

                <Button
                    title='Registrate'
                    onPress={handleRegister}
                />
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
        // alignItems: 'center',
        alignContent: 'center',
        paddingHorizontal: 20,
        gap: 20
    },
    input: {
        paddingHorizontal: 20,
        borderColor: 'gray',
        backgroundColor: 'white',
        width: "100%",
        borderWidth: 1,
        borderRadius: 5
    }
})