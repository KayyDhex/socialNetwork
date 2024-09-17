import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Home() {
    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: 20,
                paddingVertical: 10
            }}
        >
            <Text>Posts</Text>
        </View>
    )
}