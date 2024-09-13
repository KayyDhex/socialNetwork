import { View, Text, ScrollView } from 'react-native'
import React from 'react';
import { Avatar, Button } from 'react-native-paper';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Link } from 'expo-router';

export default function Profile() {

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

    return (
        <View
            style={{ flex: 1, margin: 20 }}
        >
            <View
                style={{ flexDirection: 'row', gap: 25, alignContent: 'center', alignItems: 'center' }}
            >
                <Avatar.Text label='H' size={100} />
                <TextInfo title="Posts" number={100} />
                <TextInfo title="Posts" number={100} />
                <TextInfo title="Posts" number={100} />
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
                    Hans Camilo Correa
                </Text>
                <Text>Ingeniero Informatico</Text>
                <Text>Seguido por </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        marginVertical: 10,
                        gap: 10
                    }}
                >
                    <Link href={"/(tabs)/profile/editProfile"} asChild>
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
            <ScrollView
                style={{
                    flexDirection: 'row',
                }}
                horizontal={true}
            >
                {
                    Array.from({ length: 10 }).map((value, i) => <Avatar.Icon icon={"account"} key={i} size={60} style={{ marginHorizontal: 5 }} />)
                }
            </ScrollView>
        </View>
    )
}