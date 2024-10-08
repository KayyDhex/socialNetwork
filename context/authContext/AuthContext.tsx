import { createContext, useEffect, useReducer } from "react";
import { authReducer } from "./authReducer";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/utils/firebaseConfig";
import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export interface AuthState {
    user?: any,
}

const authStateDefault = {
    user: undefined
}

interface AuthContextProps {
    state: AuthState,
    signUp: (email: string, password: string, username: string) => Promise<boolean>,
    signIn: (email: string, password: string) => Promise<boolean>,
    updateUser: (user: any) => Promise<boolean>
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: any) {

    const [state, dispatch] = useReducer(authReducer, authStateDefault);

    useEffect(() => {
        // signUp("hans.correa2@correa.com", "123456789");
        // signIn("hans.correa2@correa.com", "123456789");
        console.log("USUARIO: ", {
            user: state.user
        })
    }, [state]);

    const signIn = async (email: string, password: string): Promise<boolean> => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)

            const docRef = doc(db, "users", userCredential.user.uid);
            const docSnap = await getDoc(docRef);

            dispatch({
                type: "login", payload: {
                    ...userCredential.user,
                    ...docSnap.data()
                }
            })

            return true;
        } catch (error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error: ", {
                errorCode,
                errorMessage
            })
            return false;
        }
    }

    const signUp = async (email: string, password: string, username: string): Promise<boolean> => {

        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            // Obtener el UID del usuario recién creado
            const user = response.user;
            const uid = user.uid;

            // Guardar los datos del usuario en Firestore
            await setDoc(doc(db, "users", uid), {
                email,
                username
            });

            dispatch({
                type: "login", payload: {
                    ...response.user,
                    username
                }
            })
            return true;
        } catch (error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error: ", {
                errorCode,
                errorMessage
            })
            return false
        }
    }

    const uploadImage = async (uri: string) => {
        const storage = getStorage();
        const storageRef = ref(storage, 'avatars/' + (state.user.uid ?? "") + "-" + Date.now());

        try {
            const response = await fetch(uri);
            const blob = await response.blob();

            const snapshot = await uploadBytes(storageRef, blob)
            const url = await getDownloadURL(storageRef);

            return url;
        } catch (error) {
            console.log(error)
            return ""
        }
    }

    const updateUser = async (user: any) => {
        try {
            // Guardar los datos del usuario en Firestore
            let image = "";
            const validation = typeof user.photo != "string"
            if (validation) {
                image = await uploadImage(user.photo.uri);
            }

            await setDoc(doc(db, "users", state.user.uid), {
                ...user,
                photo: validation ? image : user.photo
            });
            const docRef = doc(db, "users", state.user.uid);
            const docSnap = await getDoc(docRef);

            dispatch({
                type: "login", payload: {
                    ...state.user,
                    ...docSnap.data()
                }
            })
            return true;
        } catch (error) {
            console.log("Error al actualizar: ", error)
            return false;
        }
    }

    return <AuthContext.Provider
        value={{
            state,
            signIn,
            signUp,
            updateUser
        }}
    >
        {children}
    </AuthContext.Provider>
}