import { View, Text, ScrollView } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '@/context/authContext/AuthContext'
import { DataContext } from '@/context/dataContext/DataContext';
import AvatarView from '@/components/AvatarView';
import { Avatar } from 'react-native-paper';

export default function Message() {

    const { state: { allUsers, allChats }, addMessageToChat } = useContext(DataContext);

    useEffect(() => {
        console.log({ allChats })
        // if (allChats.length > 0) {
        //     // Example usage: add a message to the chat
        //     const newMessage = {
        //         senderId: "UeYnEQ5kUOaIVd3PxdT5G4K3", // Example sender UID
        //         messageText: "Hello, how are you?", // Message content
        //         timestamp: new Date(), // Timestamp for the message
        //     };

        //     // Add the message to the chat with chatId "QDedwvoc4zLv..."
        //     addMessageToChat("QDedwovec4zLvoiNaEe1", newMessage);
        // }
    }, [allChats])

    return (
        <View
            style={{
                flex: 1
            }}
        >
            <ScrollView

                horizontal={true}>
                {allUsers.map((item, i) => <View key={i}
                    style={{ marginHorizontal: 10, marginVertical: 10 }}
                >
                    {
                        item?.photo ?
                            <AvatarView photo={item.photo} size={75} />
                            :
                            <Avatar.Text label={item.username.substring(0, 1).toUpperCase()} size={75} />
                    }
                    <Text style={{ textAlign: 'center' }}>{item.username}</Text>
                </View>)}
            </ScrollView>
            <ScrollView
                style={{
                    flex: 1
                }}
            >
                {allChats?.map((item, i) => <Text key={i}>{i}</Text>)}
            </ScrollView>
        </View>
    )
}