export interface LocalImageProps {
    uri: string,
    name: string,
}

export interface PostProps {
    address: string,
    description: string,
    image: LocalImageProps | string,
    date: Date,
    username?: string,
    postedBy?: string,
    likes?: number,
}

export interface DefaultResponse {
    isSuccess: boolean;
    message: string;
}

export interface ModalProps {
    visible: boolean,
    type?: 'success' | 'error' | 'info' | 'notifications' | 'loading',
    title?: string,
    textBody?: string,
    textCancel?: string,
    textAcept?: string,
    onClose?(): void,
    onCancel?(): void,
    onAcept?(): void,
}
