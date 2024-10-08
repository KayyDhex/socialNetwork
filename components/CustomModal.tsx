import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { View, Text, Modal, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { Button, useTheme } from 'react-native-paper'
import { ModalProps } from '@/interfaces/postsInterfaces';

export default function CustomModal({
    visible,
    type,
    title,
    textBody,
    textAcept,
    textCancel,
    onCancel,
    onAcept,
    onClose }: ModalProps) {
    const { colors } = useTheme();

    const getIconName = (): string => {
        switch (type) {
            case 'success':
                return 'check-circle'
            case 'error':
                return 'close-circle';
            case 'info':
                return 'help-circle';
            case 'notifications':
                return 'bell-circle';
        }
        return ""
    }

    const getColor = () => {
        switch (type) {
            case 'success':
                return '#22C55E'
            case 'error':
                return '#FF5630';
            case 'info':
                return '#00B8D9';
            case 'notifications':
                return '#FFAB00';
        }
        return "#00B8D9"
    }

    return (<>
        <Modal
            visible={visible}
            transparent
            animationType="fade"
        >
            <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#00000050", alignContent: "center", alignItems: "center" }}>
                {
                    onClose &&
                    <TouchableOpacity
                        onPress={onClose}
                        style={{ position: 'absolute', flex: 1, width: '100%', height: '100%' }}
                    />
                }
                <View
                    style={{ backgroundColor: colors.background, paddingVertical: 25, paddingHorizontal: 15, borderRadius: 8, width: '90%', justifyContent: 'center', alignContent: 'center', alignItems: 'center', gap: 10 }}
                >
                    {
                        type && type != 'loading' &&
                        <Icon name={getIconName()} size={50} color={getColor()} />
                    }
                    {
                        type == 'loading' &&
                        <ActivityIndicator size={50} color={colors.primary} />
                    }
                    <View>
                        {
                            title &&
                            <Text
                                style={{ fontWeight: '600', color: colors.secondary, textAlign: 'center', fontSize: 20 }}
                            >{title}</Text>
                        }
                        {
                            textBody &&
                            <View
                                style={{ paddingHorizontal: 20, marginVertical: 10 }}
                            >
                                <Text
                                    style={{ color: colors.secondary, textAlign: 'center', fontSize: 16 }}
                                >{textBody}</Text>
                            </View>
                        }
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            gap: 10
                        }}
                    >

                        {
                            onCancel &&
                            <Button
                                mode="outlined"
                                style={{
                                    borderRadius: 5
                                }}
                                onPress={onCancel}
                            >
                                <Text>{textCancel ?? "Cancelar"}</Text>
                            </Button>
                        }
                        {
                            onAcept &&
                            <Button
                                mode="contained"
                                style={{
                                    borderRadius: 5
                                }}
                                onPress={onAcept}
                            >
                                <Text>{textAcept ?? "Aceptar"}</Text>
                            </Button>
                        }
                    </View>
                </View>
            </View>
        </Modal>
    </>
    )
}