import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { MaterialIcons } from '@expo/vector-icons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router } from 'expo-router';

interface Props {
    type: "home" | "profile" | ""
}

export default function CustomPrincipalAppBar({ type }: Props) {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                alignContent: 'center',
                alignItems: 'center'
            }}
        >
            <View>
                <Image
                    style={{
                        height: 60,
                        aspectRatio: 20 / 9,
                    }}
                    source={require("../../assets/resources/Logo-Instagram.png")}
                    contentFit="cover"
                    transition={1000}
                />
            </View>
            <View
                style={{
                    flexDirection: "row",
                    gap: 15
                }}
            >
                <TouchableOpacity
                    onPress={() => router.push("/(tabs)/home/notifications")}
                >
                    <MaterialCommunityIcons name="cards-heart-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => router.push("/(tabs)/home/message")}
                >
                    <MaterialCommunityIcons name="message-text-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}