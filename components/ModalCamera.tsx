import { CameraView, CameraType, useCameraPermissions, CameraViewRef } from 'expo-camera';
import { View, Text, Modal, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'

export interface ModalCameraProps {
    isVisible: boolean,
    onClose: () => void,
    onSave: (photo: any) => void,
}

export default function ModalCamera({
    isVisible,
    onClose,
    onSave,
}: ModalCameraProps) {

    const [facing, setFacing] = useState<CameraType>('back');
    const cameraRef = useRef<any>()
    const [permission, requestPermission] = useCameraPermissions();

    const handleTakePhoto = async () => {
        const photo = await cameraRef.current.takePictureAsync({
            quality: 0.5,
            base64: true
        });

        onSave(photo);
        onClose();
        console.log({
            photo
        })
    }

    return (
        <Modal
            visible={isVisible}
            onDismiss={onClose}
        >
            {!permission ? <View /> :
                !permission.granted ?
                    <View style={styles.container}>
                        <Text style={styles.message}>Necesitas activar los permisos</Text>
                        <Button onPress={requestPermission} title="grant permission" />
                    </View>
                    :
                    <View style={styles.container}>
                        <CameraView
                            ref={cameraRef}
                            style={styles.camera}
                            facing={facing}
                        >
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button} onPress={() => setFacing(prev => prev == 'front' ? 'back' : 'front')}>
                                    <Text style={styles.text}>Flip Camera</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
                                    <Text style={styles.text}>Foto</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={onClose}>
                                    <Text style={styles.text}>Cerrar</Text>
                                </TouchableOpacity>
                            </View>
                        </CameraView>
                    </View>
            }
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});