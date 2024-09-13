import { createContext, useEffect, useReducer } from "react";
import { authReducer } from "./authReducer";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/utils/firebaseConfig";
import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";

export interface AuthState {
    user?: any
}

const authStateDefault = {
    user: undefined
}

interface AuthContextProps {
    state: AuthState,
    signUp: (email: string, password: string) => Promise<boolean>,
    signIn: (email: string, password: string) => Promise<boolean>,
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: any) {

    const [state, dispatch] = useReducer(authReducer, authStateDefault);


    useEffect(() => {
        // signUp("hans.correa2@correa.com", "123456789");
        signIn("hans.correa2@correa.com", "123456789");
        // console.log("HOLA MUNDO")
    }, []);

    const signIn = async (email: string, password: string): Promise<boolean> => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const docRef = doc(db, "Users", userCredential.user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
            } else {
                console.log("No such document!");
            }
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

    const signUp = async (email: string, password: string): Promise<boolean> => {

        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            // Obtener el UID del usuario recién creado
            const user = response.user;
            const uid = user.uid;

            // Guardar los datos del usuario en Firestore
            await setDoc(doc(db, "Users", uid), {
                firstname: "hans",
                lastname: "correa",
                email,
            });

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

    return <AuthContext.Provider
        value={{
            state,
            signIn,
            signUp
        }}
    >
        {children}
    </AuthContext.Provider>
}