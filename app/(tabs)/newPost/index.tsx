import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import ModalCamera from '@/components/ModalCamera';
import { Image } from 'expo-image';
import * as Location from 'expo-location';

export default function NewPost() {

    const [isVisible, setIsVisble] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState(undefined as any);

    const [location, setLocation] = useState(null as Location.LocationObject | null);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            console.log("Mi ubicacion: ", {
                location
            })
            setLocation(location);
        })();
    }, []);

    const getAddress = async () => {

        if (location == null) return;

        try {
            console.log(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${location.coords?.latitude}&lon=${location.coords?.longitude}`);
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${location.coords?.latitude}&lon=${location.coords?.longitude}`)

            const data = await response.json();
            console.log({
                data
            })
        } catch (error) {
            console.log(error)
        }
    }

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
                    {
                        currentPhoto && currentPhoto.uri ?
                            <Image
                                style={{
                                    width: '100%',
                                    height: "100%"
                                }}
                                source={{ uri: currentPhoto.uri }}
                                contentFit="cover"
                                transition={1000}
                            /> :
                            <>
                                <FontAwesome5 name="plus" size={80} color="white" />
                                <Text
                                    style={{
                                        fontWeight: '800',
                                        fontSize: 18,
                                        color: 'white'
                                    }}
                                >Seleccionar foto</Text>
                            </>
                    }
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
            <TouchableOpacity
                onPress={getAddress}
            >
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
                onSave={(photo) => {
                    setCurrentPhoto(photo);
                }}
                onClose={() => { setIsVisble(false) }}
            />
        </ScrollView >
    )
}