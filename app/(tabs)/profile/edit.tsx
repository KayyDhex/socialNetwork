import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AvatarPicker from '@/components/AvatarPicker'
import { Button, TextInput } from 'react-native-paper'
import { AuthContext } from '@/context/authContext/AuthContext'
import { router } from 'expo-router'
import CustomModal from '@/components/CustomModal'
import { ModalProps } from '@/interfaces/postsInterfaces'

export default function editProfile() {

    const { state: { user }, updateUser } = useContext(AuthContext);
    const [modal, setModal] = useState({ visible: false } as ModalProps);
    const [toUpdate, setToUpdate] = useState({
        username: user.username,
        name: user.name ?? "",
        bio: user.bio ?? "",
        photo: user.photo ?? ""
    })

    useEffect(() => {
        console.log({ photo: toUpdate.photo })
    }, [toUpdate.photo]);

    const handleUpdate = async () => {
        setModal({
            visible: true,
            type: 'loading',
            title: 'Actualizando usuario',
            textBody: 'Espera un momento...'
        })
        try {
            const response = await updateUser(toUpdate);
            if (response) {
                setModal({
                    visible: false,
                })
                router.back();
            } else {
                setModal({
                    visible: true,
                    type: 'error',
                    title: 'Hubo un error ingresand',
                    textBody: 'Vuelve a intentarlo...'
                })
                console.log("Hubo un error ingresando")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View
            style={{
                flex: 1,
                margin: 20,
                gap: 10
            }}
        >
            <AvatarPicker
                photo={toUpdate.photo}
                onChange={(photo) => setToUpdate(prev => ({ ...prev, photo }))}
            />
            <TextInput
                label="Nombre y apellido"
                placeholder={"Ingresar nombre y apellido..."}
                value={toUpdate.name}
                onChangeText={(text) => setToUpdate(prev => ({ ...prev, name: text }))}
                mode="outlined"
                outlineColor='#E4E4E7'
                theme={{
                    colors: {
                        background: "white"
                    }
                }}
            />
            <TextInput
                label="Nombre de usuario"
                placeholder={"Ingresar el nombre de usuario..."}
                value={toUpdate.username}
                onChangeText={(text) => setToUpdate(prev => ({ ...prev, username: text }))}
                mode="outlined"
                outlineColor='#E4E4E7'
                theme={{
                    colors: {
                        background: "white"
                    }
                }}
            />
            <TextInput
                label="Biografia"
                placeholder={"Ingresar la biografia..."}
                value={toUpdate.bio}
                onChangeText={(text) => setToUpdate(prev => ({ ...prev, bio: text }))}
                numberOfLines={5}
                mode="outlined"
                outlineColor='#E4E4E7'
                theme={{
                    colors: {
                        background: "white"
                    }
                }}
            />
            <Button
                onPress={handleUpdate}
            >
                <Text>Actualizar</Text>
            </Button>
            <CustomModal
                {...modal}
            />
        </View>
    )
}