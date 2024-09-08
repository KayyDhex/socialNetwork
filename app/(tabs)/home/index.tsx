import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Home() {
    return (
        <View>
            <Text>Home</Text>
            <Link
                href={"/(tabs)/home/message"}
                asChild
            >
                <Button
                    title='Mensajes'
                />
            </Link>
        </View>
    )
}