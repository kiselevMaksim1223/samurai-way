import {applyMiddleware, combineReducers, createStore} from "redux";
import {profilePageActionsType, profilePageReducer} from "./profilePage-reducer";
import {dialogPageReducer} from "./dialogPage-reducer";
import {userPageActionsType, userPageReducer} from "./user-page-reducer";
import {authActionsType, authReducer} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";

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
    friends_usersPages:userPageReducer,
    auth:authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export type AppActionsType = userPageActionsType | profilePageActionsType | authActionsType

export type AppThunkType<ReturnThunkType = void> = ThunkAction<ReturnThunkType, AppStateType, unknown, AppActionsType>
// ThunkAction
// 1 параметр - описываем, что возвращает thunk
// 2 параметр - state всего приложения
// 3 параметр - экстра аргументы
// 4 параметр - все action всего App


export let store = createStore(rootReducer, applyMiddleware(thunk));

//@ts-ignore
window.store = store