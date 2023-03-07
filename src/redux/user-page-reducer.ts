import {userItemType} from "../Components/users/UsersContainer";

export const FOLLOW_FRIENDS = "FOLLOW-FRIENDS"
export const UNFOLLOW_FRIENDS = "UNFOLLOW-FRIENDS"
export const SET_USERS = "SET-USERS"
export const SET_PAGE = "SET-PAGE"
export const SET_TOTAL_USER_COUNT = "SET-TOTAL-USER-COUNT"
export const SET_IS_LOADING = "SET-IS-LOADING"
export const SET_IS_FOLLOWING = "SET-IS-FOLLOWING"


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

export type setIsFollowingAT = ReturnType<typeof setIsFollowing>

export type actionsType = followFriendsAT | unfollowFriendsAT | setUsersAT | setCurrentPageAT | setTotalUsersCountAT | setIsLoadingAT | setIsFollowingAT

export type usersPageType = {
    items: userItemType[]
    totalCount:number
    usersOnPage:number
    currentPage:number
    isLoading:boolean
    followingInProgress:Array<number>
}

const initialState:usersPageType = {
    items: [],
    totalCount:0,
    usersOnPage:5,
    currentPage:1,
    isLoading:false,
    followingInProgress:[] //сделали массив чтобы при нажатии дизейблить кнопки follow\unfollow пользователя которого мы хотим фоловить или анфоловить
}

export const userPageReducer = (state:usersPageType = initialState, action:actionsType):usersPageType => {
    switch (action.type){
        case FOLLOW_FRIENDS:
            return {
                ...state,
                items: state.items.map(u => u.id === action.userID ? {...u, followed:true} : u ),
            }
        case UNFOLLOW_FRIENDS:
            return {...state, items: state.items.map(u => u.id === action.userID ? {...u, followed:false} : u )}
        case SET_USERS:
            return {...state, items: [ ...action.users]}
        case SET_PAGE:
            return {...state, currentPage:action.currentPage}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalCount:action.totalCount}
        case "SET-IS-LOADING":
            return {...state, isLoading:action.isLoading}
        case SET_IS_FOLLOWING:
            return {...state, followingInProgress:
                    action.isFollowing
                        ? [...state.followingInProgress, action.userId]
                        : [...state.followingInProgress.filter(id => id !== action.userId)]}
        default:
            return state
    }
}

//переименуем AC в названия без AC для сокращения кода в mapDispatchToProps
export const followFriends:((isFollow:boolean, userId:number) => followFriendsAT) = (isFollow, userId) => ({type: FOLLOW_FRIENDS, isFollow:isFollow, userID:userId} )
export const unfollowFriends:((isFollow:boolean, userId:number) => unfollowFriendsAT) = (isFollow, userId) => ({type: UNFOLLOW_FRIENDS, isFollow, userID:userId} )
export const setUsers:((userList:userItemType[]) => setUsersAT) = (userList) => ({type: SET_USERS, users:userList})
export const setCurrentPage:((currentPage:number) => setCurrentPageAT) = (currentPage) => ({type: "SET-PAGE", currentPage:currentPage})
export const setTotalUsersCount:((totalUsersCount:number) => setTotalUsersCountAT) = (totalUsersCount) => ({type: SET_TOTAL_USER_COUNT, totalCount:totalUsersCount})
export const setIsLoading:((isLoading:boolean)=> setIsLoadingAT) = (isLoading) => ({type:SET_IS_LOADING, isLoading})
export const setIsFollowing  = (isFollowing:boolean, userId:number) => ({type:SET_IS_FOLLOWING, isFollowing, userId} as const)
