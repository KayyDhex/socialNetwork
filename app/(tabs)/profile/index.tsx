import { View, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Link, router } from 'expo-router';
import { DataContext } from '@/context/dataContext/DataContext';
import { Image } from 'expo-image';
import { AuthContext } from '@/context/authContext/AuthContext';
import AvatarView from '@/components/AvatarView';

export default function Profile() {

    const { state: { myPosts } } = useContext(DataContext);
    const { state: { user } } = useContext(AuthContext)

    const TextInfo = ({ title, number }: any) => (
        <View
            style={{
                flexDirection: 'column',
                gap: 5,
                alignItems: 'center',
                alignContent: 'center'
            }}
        >
            <Text style={{ fontSize: 18, fontWeight: '600' }}>{number}</Text>
            <Text style={{ fontWeight: '400' }}>{title}</Text>
        </View>
    )

    const handlePress = (id: string) => {
        router.navigate({ pathname: "/(tabs)/profile/detail/[id]", params: { id } })
    }

    return (
        <View
            style={{ flex: 1, margin: 20 }}
        >
            <View
                style={{ flexDirection: 'row', gap: 25, alignContent: 'center', alignItems: 'center' }}
            >
                {
                    (user.photo && user.photo != "") ?
                        <AvatarView
                            size={100}
                            photo={user.photo}
                        />
                        :
                        <Avatar.Text label={user.username.substring(0, 1).toUpperCase()} size={100} />
                }
                <TextInfo title="Posts" number={myPosts.length} />
                <TextInfo title="Seguidores" number={0} />
                <TextInfo title="Seguidos" number={0} />
            </View>
            <View
                style={{
                    gap: 5,
                    marginVertical: 25
                }}
            >
                <Text
                    style={{
                        fontWeight: '600',
                        letterSpacing: 1,
                        fontSize: 16
                    }}
                >
                    {user.username}
                </Text>
                <Text>{user.name ?? ""}</Text>
                {
                    user.bio &&
                    <Text>{user.bio}</Text>
                }
                <Text>Seguido por </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        marginVertical: 10,
                        gap: 10
                    }}
                >
                    <Link href={"/(tabs)/profile/edit"} asChild>
                        <Button
                            mode='contained'
                            style={{ flex: 1 }}
                        >
                            Editar perfil
                        </Button>
                    </Link>
                    <Button
                        mode='contained'
                        style={{ flex: 1 }}
                    >
                        Compartir perfil
                    </Button>
                </View>
            </View>
            <View
                style={{
                    flex: 1,
                }}
            >
                <FlatList style={{ flex: 1 }}
                    numColumns={3}                  // set number of columns 
                    data={myPosts}
                    columnWrapperStyle={style.row}
                    // @ts-ignore
                    keyExtractor={(item, index) => index} //left={LeftContent}
                    renderItem={({ item, index }) => {
                        const lastItem = index === myPosts.length - 1;
                        console.log({
                            // @ts-ignore
                            image: item.image
                        })
                        return <TouchableOpacity
                            style={{
                                flex: 1,
                                maxWidth: '33%',
                                aspectRatio: 1 / 1,
                                marginHorizontal: 1
                            }}
                            onPress={() => handlePress(item?.id ?? "")}
                        >
                            <Image
                                style={{
                                    width: '100%',
                                    height: '100%'
                                }}
                                // @ts-ignore
                                source={{ uri: item.image ?? "https://picsum.photos/700" }}
                                contentFit="cover"
                                transition={1000}
                            />
                        </TouchableOpacity>
                    }}
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    row: {
        flex: 1,
        marginVertical: 1
    }
});