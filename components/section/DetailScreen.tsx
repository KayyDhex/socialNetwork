import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Image } from 'expo-image'
import { convertData } from '@/utils/convertData'
import { AuthContext } from '@/context/authContext/AuthContext'
import AvatarView from '../AvatarView'
import { Avatar } from 'react-native-paper'

export default function DetailScreen({
    currentPost
}: any) {

    const { state: { user } } = useContext(AuthContext);

    useEffect(() => {
        console.log({
            currentPost
        })
    }, [currentPost])

    return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    gap: 20,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    alignContent: 'center',
                    alignItems: 'center'
                }}
            >
                {
                    (user.photo && user.photo != "") ?
                        <AvatarView
                            size={75}
                            photo={user.photo}
                        />
                        :
                        <Avatar.Text label={user.username.substring(0, 1).toUpperCase()} size={75} />
                }
                <View
                    style={{
                        gap: 5
                    }}
                >
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{user.username}</Text>
                    <Text>{currentPost?.address.split(", ")[0] ?? ""}</Text>
                </View>
            </View>
            <View
                style={{
                    gap: 10,
                    paddingVertical: 10,
                }}
            >
                <View
                    style={{
                        aspectRatio: 1 / 1,
                        marginHorizontal: 1
                    }}
                >
                    <Image
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                        // @ts-ignore
                        source={{ uri: currentPost?.image ?? "https://picsum.photos/700" }}
                        contentFit="cover"
                        transition={500}
                    />

                </View>
                <Text style={{
                    marginHorizontal: 20
                }}>{convertData(currentPost?.date) ?? ""}</Text>
            </View>
        </View>
    )
}