import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Singup() {
    return (
        <View
            style={styles.container}
        >
            <Text
                style={{
                    fontWeight: 'bold',
                    fontSize: 24
                }}
            >Ingresa</Text>
            <TextInput
                value='hola'
                style={styles.input}
            />
            <TextInput
                value='hola'
                style={styles.input}
            />
            <Link
                href={"/(tabs)/home"}
                asChild
            >
                <Button
                    title='Ingresar'
                />
            </Link>
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