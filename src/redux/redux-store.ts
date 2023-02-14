import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePage-reducer";
import {dialogPageReducer} from "./dialogPage-reducer";
import {userItemType, userPageReducer} from "./user-page-reducer";

export const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE"
export const CHANGE_NEW_MESSAGE_TEXT = "CHANGE-NEW-MESSAGE-TEXT"

export const FOLLOW_FRIENDS = "FOLLOW-FRIENDS"
export const UNFOLLOW_FRIENDS = "UNFOLLOW-FRIENDS"
export const SET_USERS = "SET-USERS"
export const SET_PAGE = "SET-PAGE"
export const SET_TOTAL_USER_COUNT = "SET-TOTAL-USER-COUNT"
export const SET_IS_LOADING = "SET-IS-LOADING"
// export const SET_FRIENDS = "SET-FRIENDS"


export type actionsType = addNewPostActionType
    | changeNewPostActionType
    | addNewMessageActionType
    | changeNewMessageTextActionType
    | followFriendsAT
    | unfollowFriendsAT
    | setUsersAT
    | setCurrentPageAT
    | setTotalUsersCountAT
    | setIsLoadingAT

export type addNewPostActionType = {
    type: "ADD-NEW-POST"
}
export type changeNewPostActionType = {
    type: "CHANGE-NEW-POST-TEXT"
    newPostText:string
}
export type addNewMessageActionType = {
    type: typeof ADD_NEW_MESSAGE
}
export type changeNewMessageTextActionType = {
    type: typeof CHANGE_NEW_MESSAGE_TEXT
    newMessageBody:string
}

export type followFriendsAT = {
    type: typeof FOLLOW_FRIENDS
    isFollow: boolean
    userID:number
}

export type unfollowFriendsAT = {
    type: typeof UNFOLLOW_FRIENDS
    isFollow: boolean
    userID:number
}

export type setUsersAT = {
    type: typeof SET_USERS
    users: userItemType[]
}

export type setCurrentPageAT = {
    type:typeof SET_PAGE,
    currentPage:number
}

export type setTotalUsersCountAT = {
    type: typeof SET_TOTAL_USER_COUNT
    totalCount:number
}

export type setIsLoadingAT = {
    type: typeof SET_IS_LOADING
    isLoading:boolean
}
// export type setFriendsAT = {
//     type: typeof SET_FRIENDS
//     friends: friendItemType[]
// }

let rootReducer = combineReducers({
    profilePage:profilePageReducer,
    dialogsPage:dialogPageReducer,
    friends_usersPages:userPageReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer);