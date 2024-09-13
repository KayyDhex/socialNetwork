import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'

export default function editProfile() {
    return (
        <View
            style={{
                flex: 1,
                margin: 20
            }}
        >
            <TouchableOpacity
            >
                <Avatar.Text label='H' size={100} />
            </TouchableOpacity>
        </View>
    )
}