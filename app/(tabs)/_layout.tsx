import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { DataProvider } from '@/context/dataContext/DataContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function _layout() {

    const { top, bottom } = useSafeAreaInsets();

    return (
        <View
            style={{
                flex: 1,
                paddingTop: top,
            }}
        >
            <DataProvider>
                <Tabs
                    screenOptions={{
                        tabBarActiveTintColor: "#000000",
                        headerShown: false,
                        tabBarInactiveTintColor: "#000000AA",
                    }}
                >
                    <Tabs.Screen
                        name='home'
                        options={{
                            title: "Inicio",
                            tabBarIcon: ({ color, size }) => (<FontAwesome5 name="home" size={size} color={color} />)
                        }}
                    />
                    <Tabs.Screen
                        name='search'
                        options={{
                            title: "Buscar",
                            tabBarIcon: ({ color, size }) => (<FontAwesome5 name="search" size={size} color={color} />)
                        }}
                    />
                    <Tabs.Screen
                        name='newPost'
                        options={{
                            title: "Nuevo Post",
                            tabBarIcon: ({ color, size }) => (<FontAwesome5 name="plus-circle" size={size} color={color} />)
                        }}
                    />
                    <Tabs.Screen
                        name='reels'
                        options={{
                            title: "Reels",
                            tabBarIcon: ({ color, size }) => (<FontAwesome5 name="photo-video" size={size} color={color} />)
                        }}
                    />
                    <Tabs.Screen
                        name='profile'
                        options={{
                            title: "Perfil",
                            tabBarIcon: ({ color, size }) => (<FontAwesome5 name="user-alt" size={size} color={color} />)
                        }}
                    />
                </Tabs>
            </DataProvider>
        </View>
    )
}