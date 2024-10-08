import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from 'react-native-paper'
import EmptyData from '@/components/EmptyData';

export default function notifications() {

    const { colors } = useTheme();
    const [notifications, setNotifications] = useState([]);

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.background,
                gap: 15
            }}
        >
            <View
                style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}
            >
                <Text
                    style={{ fontSize: 24, fontWeight: '700', fontFamily: "BeVietnamProBold" }}
                >Notificaciones</Text>
            </View>
            {
                notifications.length == 0 ?
                    <EmptyData title='No tienes notificaciones' />
                    :
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}
                    >
                        <Text
                            style={{ fontSize: 16, fontWeight: '700', fontFamily: "BeVietnamProBold" }}
                        >No leídas</Text>

                        <TouchableOpacity
                            onPress={() => { }}
                        >
                            <Text
                                style={{
                                    textDecorationLine: 'underline',
                                    color: colors.primary
                                }}
                            >
                                Marcar como leídas
                            </Text>
                        </TouchableOpacity>

                    </View>
            }
        </View>
    )
}