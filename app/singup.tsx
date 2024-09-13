import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { Link } from 'expo-router'
import { AuthContext } from '@/context/authContext/AuthContext';

export default function Singup() {

    const { signUp } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View
            style={styles.container}
        >
            <Text
                style={{
                    fontWeight: 'bold',
                    fontSize: 24
                }}
            >Registrate</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                style={styles.input}
            />
            <Button
                title='Ingresar'
                onPress={() => signUp(email, password)}
            />
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
        borderWidth: 1,
        borderRadius: 5
    }
})