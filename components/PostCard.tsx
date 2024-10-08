import { View, Text } from 'react-native'
import React from 'react'
import AvatarView from './AvatarView'
import { Avatar } from 'react-native-paper'
import { Image } from 'expo-image'
import { convertData } from '@/utils/convertData'

export default function PostCard({ photo, address, date, username, image }: any) {
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
                    (photo && photo != "") ?
                        <AvatarView
                            size={75}
                            photo={photo}
                        />
                        :
                        <Avatar.Text label={username.substring(0, 1).toUpperCase()} size={75} />
                }
                <View
                    style={{
                        gap: 5
                    }}
                >
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{username}</Text>
                    <Text>{address.split(", ")[0] ?? ""}</Text>
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
                        source={{ uri: image ?? "https://picsum.photos/700" }}
                        contentFit="cover"
                        transition={500}
                    />

                </View>
                <Text style={{
                    marginHorizontal: 20
                }}>{convertData(date) ?? ""}</Text>
            </View>
        </View>
    )
}