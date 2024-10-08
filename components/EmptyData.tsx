import { View, Text } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

export default function EmptyData({ title }: { title: string }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
            <MaterialIcons name="search-off" size={75} color="#00000050" />
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#00000050" }}>{title}</Text>
        </View>
    )
}