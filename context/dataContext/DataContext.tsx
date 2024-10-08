import { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer } from "./dataReducer";
import { getDownloadURL, getStorage, ref, uploadBytes, uploadString } from "firebase/storage";
import { DefaultResponse, PostProps } from "@/interfaces/postsInterfaces";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/utils/firebaseConfig";
import { AuthContext } from "../authContext/AuthContext";

export interface DataState {
    myPosts: [],
    allPosts: [],
    allUsers: []
}

const dataStateDefault: DataState = {
    myPosts: [],
    allPosts: [],
    allUsers: []
}

interface DataContextProps {
    state: DataState,
    newPost: (newPost: PostProps) => Promise<DefaultResponse>
}

export const DataContext = createContext({} as DataContextProps);

export function DataProvider({ children }: any) {

    const [state, dispatch] = useReducer(dataReducer, dataStateDefault);
    const { state: { user } } = useContext(AuthContext)

    useEffect(() => {
        allPost();
        getMyPosts();
    }, []);

    useEffect(() => {
        console.log({
            state: state.allPosts
        })
    }, [state])

    const uploadImage = async (uri: string, name: string) => {
        const storage = getStorage();
        const storageRef = ref(storage, 'posts/' + (user.uid ?? "") + "-" + Date.now());

        try {
            const response = await fetch(uri);
            const blob = await response.blob();

            const snapshot = await uploadBytes(storageRef, blob)
            const url = await getDownloadURL(storageRef);

            console.log('Uploaded a raw string!');
            console.log({
                snapshot
            })

            return url;
        } catch (error) {
            console.log(error)
            return ""
        }
    }

    const getMyPosts = async () => {
        try {
            const postsRef = collection(db, "posts");
            const q = query(postsRef, where("postedBy", "==", user.uid));
            const querySnapshot = await getDocs(q);

            const posts = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            dispatch({ type: "getMyPosts", payload: posts });
        } catch (error) {
            console.log(error)
        }
    }

    const allPost = async () => {
        try {
            const userRef = collection(db, "users");
            const postsRef = collection(db, "posts");
            // const q = query(postsRef, where("postedBy", "==", user.uid));
            const querySnapshot = await getDocs(postsRef);
            const querySnapshotUsers = await getDocs(userRef);

            const users = querySnapshotUsers.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));

            const posts = querySnapshot.docs.map(doc => {
                const user = users.find((item) => doc.data().postedBy == item.id)
                return ({
                    id: doc.id,
                    ...doc.data(),
                    postedBy: user
                })
            });

            dispatch({ type: "getAllPosts", payload: posts });
            dispatch({ type: "getAllUsers", payload: users });
        } catch (error) {
            console.log(error)
        }
    }


    const newPost = async (newPost: PostProps): Promise<DefaultResponse> => {
        try {
            const isImage = typeof newPost.image != "string"
            let urlImage = ""

            if (typeof newPost.image != "string") {
                urlImage = await uploadImage(newPost.image.uri, newPost.image.name);
            }

            console.log({
                urlImage
            })

            const docRef = await addDoc(collection(db, "posts"), {
                ...newPost,
                image: isImage ? urlImage : newPost.image,
                username: user.email,
                postedBy: user.uid,
                likes: 0,
            });
            console.log("Document written with ID: ", docRef.id);
            await getMyPosts();
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
            newPost
        }}
    >
        {children}
    </DataContext.Provider>
}