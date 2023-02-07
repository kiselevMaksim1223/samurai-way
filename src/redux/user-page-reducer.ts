

import {
    actionsType,
    FOLLOW_FRIENDS,
    followFriendsAT,
    SET_USERS, setUsersAT,
    UNFOLLOW_FRIENDS,
    unfollowFriendsAT
} from "./redux-store";


type photosType = {
    small:string
    large:string
}

export type userItemType = {
    name: string
    id: number
    uniqueUrlName:string
    photos: photosType
    status:string
    followed:boolean
}


export type usersPageType = {
    items: userItemType[]
}



let initialState:usersPageType = {
    items: []
}

export const userPageReducer = (state:usersPageType = initialState, action:actionsType):usersPageType => {
    switch (action.type){
        case FOLLOW_FRIENDS:
            // const newFriend:friendItemType = { status:"", ...state.userList[action.userID], isFollowed:true, id:100}
            debugger
            return {
                ...state,
                items: state.items.map(u => u.id === action.userID ? {...u, followed:true} : u ),
            }
        case UNFOLLOW_FRIENDS:
            debugger
            return {...state, items: state.items.map(u => u.id === action.userID ? {...u, followed:false} : u )}
        case SET_USERS:
            return {...state, items: [...state.items, ...action.users]}
        default:return state
    }
}

export const followFriendsAC:((isFollow:boolean, userId:number) => followFriendsAT) = (isFollow,userId) => ({type: FOLLOW_FRIENDS, isFollow:isFollow, userID:userId})
export const unfollowFriendsAC:((isFollow:boolean, userId:number) => unfollowFriendsAT) = (isFollow,userId) => ({type: UNFOLLOW_FRIENDS, isFollow, userID:userId})
export const setUsersAC:((userList:userItemType[]) => setUsersAT) = (userList) => ({type: SET_USERS, users:userList})
