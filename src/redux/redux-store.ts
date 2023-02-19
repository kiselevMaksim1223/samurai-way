import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePage-reducer";
import {dialogPageReducer} from "./dialogPage-reducer";
import {userPageReducer} from "./user-page-reducer";

export const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE"
export const CHANGE_NEW_MESSAGE_TEXT = "CHANGE-NEW-MESSAGE-TEXT"


export type actionsType = addNewMessageActionType
    | changeNewMessageTextActionType


export type addNewMessageActionType = {
    type: typeof ADD_NEW_MESSAGE
}
export type changeNewMessageTextActionType = {
    type: typeof CHANGE_NEW_MESSAGE_TEXT
    newMessageBody:string
}

let rootReducer = combineReducers({
    profilePage:profilePageReducer,
    dialogsPage:dialogPageReducer,
    friends_usersPages:userPageReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer);