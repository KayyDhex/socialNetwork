import { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer } from "./dataReducer";
import { getStorage, ref, uploadString } from "firebase/storage";
import { PostProps } from "@/interfaces/postsInterfaces";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/utils/firebaseConfig";
import { AuthContext } from "../authContext/AuthContext";

export interface DataState {

}

const dataStateDefault = {

}

interface DataContextProps {
    state: DataState,
}

export const DataContext = createContext({} as DataContextProps);

export function DataProvider({ children }: any) {

    const [state, dispatch] = useReducer(dataReducer, dataStateDefault);
    const { state: { user } } = useContext(AuthContext)

    useEffect(() => {

    }, []);


    const uploadImage = async (image64: string) => {
        const storage = getStorage();
        const storageRef = ref(storage, 'posts');
        try {
            const snapshot = await uploadString(storageRef, image64)
            console.log('Uploaded a raw string!');
            console.log({
                snapshot
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getPosts = async () => {

    }


    const newPost = async (newPost: PostProps) => {
        try {
            const urlImage = await uploadImage(newPost.image);

            const docRef = await addDoc(collection(db, "posts"), {
                ...newPost,
                image: urlImage,
                date: new Date(),
                username: user.email,
                postedBy: user.uid,
                likes: 0,
            });
            console.log("Document written with ID: ", docRef.id);
            return {
                isSuccess: true,
                message: "Creado con exito"
            }
        } catch (error) {
            console.log(error);
            return {
                isSuccess: false,
                message: "Hubo un error: " + error
            }
        }
    }

    const updatePost = async () => {
    }

    const deletePost = async () => {
    }


    return <DataContext.Provider
        value={{
            state,
        }}
    >
        {children}
    </DataContext.Provider>
}