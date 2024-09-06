import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function _layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "blue"
            }}
        >
            <Tabs.Screen
                name='home'
                options={{
                    title: "Inicio",
                    // tabBarIcon: ({ color }) => (<FontAwesome5 name="photo-video" size={24} color={color} />)
                }}
            />
            <Tabs.Screen
                name='search'
                options={{
                    title: "Buscar",
                    // tabBarIcon: ({ color }) => (<FontAwesome5 name="photo-video" size={24} color={color} />)
                }}
            />
            <Tabs.Screen
                name='newPost'
                options={{
                    title: "Nuevo Post",
                    // tabBarIcon: ({ color }) => (<FontAwesome5 name="photo-video" size={24} color={color} />)
                }}
            />
            <Tabs.Screen
                name='reels'
                options={{
                    title: "Reels",
                    // tabBarIcon: ({ color }) => (<FontAwesome5 name="photo-video" size={24} color={color} />)
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: "Perfil",
                    // tabBarIcon: ({ color }) => (<FontAwesome5 name="photo-video" size={24} color={color} />)
                }}
            />
        </Tabs>
    )
}