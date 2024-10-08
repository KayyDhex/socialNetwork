import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Avatar, useTheme } from 'react-native-paper'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AvatarView from './AvatarView';
import ModalCamera from './ModalCamera';

interface AvatarPickerProps {
    photo: string,
    onChange: (_photo: string) => void,
    icon?: "account" | "truck",
    size?: number
}

export default function AvatarPicker({ photo, onChange, icon = "account", size = 100 }: AvatarPickerProps) {

    const { colors } = useTheme();
    const [isCamera, setIsCamera] = useState(false);

    return (
        <View
            style={{
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <TouchableOpacity
                onPress={() => setIsCamera(true)}
            >
                {
                    photo == "" ?
                        <Avatar.Icon
                            size={size}
                            style={{ backgroundColor: 'white', borderWidth: 3, borderColor: colors.primary }}
                            icon={icon}
                        /> :
                        <AvatarView
                            size={size}
                            photo={photo}
                        />
                }
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 10,
                        backgroundColor: colors.background,
                        borderColor: colors.primary,
                        borderWidth: 3,
                        borderRadius: 100,
                        padding: 2
                    }}
                >
                    <MaterialIcons name="mode-edit-outline" size={15} color="black" />
                </View>
            </TouchableOpacity>
            <ModalCamera
                isVisible={isCamera}
                onClose={() => setIsCamera(false)}
                onSave={(_photo) => {
                    onChange(_photo);
                    setIsCamera(false);
                }}
            />
        </View>
    )
}