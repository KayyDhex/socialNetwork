import { View, Text, Button, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { Link } from 'expo-router'
import { DataContext } from '@/context/dataContext/DataContext'
import { Image } from 'expo-image'
import { convertData } from '@/utils/convertData'
import PostCard from '@/components/PostCard'

export default function Home() {

    const { state: { allPosts } } = useContext(DataContext);

    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: 20,
                paddingVertical: 10
            }}
        >
            <ScrollView>

            </ScrollView>
            <FlatList
                data={allPosts}
                keyExtractor={(item, i) => i.toString()}
                renderItem={({ item }: any) => (
                    <PostCard
                        photo={item.postedBy.photo}
                        username={item.postedBy.username}
                        image={item.image}
                        address={item.address}
                        date={item.date}
                    />
                )}
            />
        </View>
    )
}