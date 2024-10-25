import { DataState } from "./DataContext";

type ActionsProps = { type: "getMyPosts", payload: any } |
{ type: "getAllPosts", payload: any } |
{ type: "getAllUsers", payload: any } |
{ type: "getAllChats", payload: any }

export const dataReducer = (state: DataState, actions: ActionsProps): DataState => {
    switch (actions.type) {
        case "getMyPosts":
            return {
                ...state,
                myPosts: actions.payload
            }
        case "getAllPosts":
            return {
                ...state,
                allPosts: actions.payload
            }
        case "getAllUsers":
            return {
                ...state,
                allUsers: actions.payload
            }
        case "getAllChats":
            return {
                ...state,
                allChats: actions.payload
            }
        default:
            return state
    }
}