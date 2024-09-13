import { createContext, useReducer } from "react";
import { authReducer, AuthState } from "./authReducer";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/utils/firebaseConfig";

const defaultValues: AuthState = {
    user: undefined,
    isLogged: false
}

interface AuthContextProps {
    state: AuthState,
    login: (email: string, password: string) => Promise<void>,
    signUp: (email: string, password: string) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(authReducer, defaultValues);

    const login = async (email: string, password: string) => {
        try {

            //Aqui va la logica de firebase para ingresar
            const reponse = { name: "Hans" }

            dispatch({
                type: "LOGIN", payload: reponse
            })

        } catch (error) {
            console.log(error)
        }
    }

    const signUp = async (email: string, password: string) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            dispatch({
                type: "LOGIN", payload: response.user
            })

        } catch (error) {
            console.log(error)
        }
    }

    return <AuthContext.Provider
        value={{
            state,
            login,
            signUp
        }}
    >
        {children}
    </AuthContext.Provider>

}