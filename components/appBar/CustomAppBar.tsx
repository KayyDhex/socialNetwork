import { View, Text, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper'
import Icon from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';

export default function CustomAppBar() {

    const { colors: { secondary } } = useTheme();

    return (
        <View
            style={{
                padding: 10,
            }}
        >
            <TouchableOpacity
                onPress={() => { if (router.canGoBack()) router.back() }}
                style={{
                    flexDirection: 'row',
                    gap: 2,
                    alignItems: 'center'
                }}
            >
                <Icon name={'keyboard-arrow-left'} size={30} color={secondary} />
                <Text
                    style={{ color: secondary, fontWeight: '600', fontSize: 20 }}
                >Volver</Text>
            </TouchableOpacity>
        </View>
    )
}