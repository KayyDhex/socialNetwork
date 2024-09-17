import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import ModalCamera from '@/components/ModalCamera';

export default function NewPost() {

    const [isVisible, setIsVisble] = useState(false);

    return (
        <ScrollView
            style={{
                flex: 1,
                paddingHorizontal: 20,
                paddingVertical: 10,

            }}
            contentContainerStyle={{
                gap: 25
            }}

        >
            <TouchableOpacity
                onPress={() => setIsVisble(true)}
            >
                <View
                    style={{
                        backgroundColor: 'grey',
                        paddingHorizontal: 20,
                        aspectRatio: 1 / 0.8,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <FontAwesome5 name="plus" size={80} color="white" />
                    <Text
                        style={{
                            fontWeight: '800',
                            fontSize: 18,
                            color: 'white'
                        }}
                    >Seleccionar foto</Text>
                </View>
            </TouchableOpacity>
            <TextInput
                mode="outlined"
                multiline
                numberOfLines={4}
                label='Descripcion'
                placeholder='Escribe la descripcion del post...'
                style={{
                    backgroundColor: 'white',
                    minHeight: 100
                }}
            />
            <TouchableOpacity>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            gap: 10
                        }}
                    >
                        <MaterialIcons name="location-on" size={24} color="black" />
                        <Text>Agregar Ubicación</Text>
                    </View>
                    <View>
                        <MaterialIcons name="chevron-right" size={24} color="black" />
                    </View>
                </View>
            </TouchableOpacity>
            <ModalCamera
                isVisible={isVisible}
                onSave={() => { }}
                onClose={() => { setIsVisble(false) }}
            />
        </ScrollView >
    )
}