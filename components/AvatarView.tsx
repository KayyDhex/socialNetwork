import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'

interface AvatarViewProps {
    photo: string,
    size: number,
    placeholder?: string
}

export default function AvatarView({ photo, size, placeholder = "" }: AvatarViewProps) {

    return <Image
        style={{
            width: size,
            height: size,
            borderRadius: 10000
        }}
        source={photo}
        contentFit="cover"
        transition={1000}
        placeholder={placeholder}
    />
}