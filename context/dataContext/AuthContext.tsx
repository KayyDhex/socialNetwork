import { createContext, useEffect, useReducer } from "react";
import { authReducer } from "./authReducer";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/utils/firebaseConfig";

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
        // signUp("hans@correa.com", "123456789");
        signIn("hans@correa.com", "12");
        console.log("HOLA MUNDO")
    }, []);

    const signIn = async (email: string, password: string): Promise<boolean> => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)

            console.log({
                userCredential,
                user: userCredential.user
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

    const signUp = async (email: string, password: string): Promise<boolean> => {

        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            console.log({
                response
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