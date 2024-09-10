import { AuthState } from "./AuthContext";

type ActionsProps = { type: "login", payload: any }

export const authReducer = (state: AuthState, actions: ActionsProps): AuthState => {

    switch (actions.type) {
        case 'login':
            return {
                ...state,
                user: actions.payload
            }
        default:
            return state
    }
}