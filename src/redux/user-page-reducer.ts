import {
    actionsType,
    FOLLOW_FRIENDS,
    followFriendsAT,
    SET_IS_LOADING,
    SET_PAGE,
    SET_TOTAL_USER_COUNT,
    SET_USERS,
    setCurrentPageAT,
    setIsLoadingAT,
    setTotalUsersCountAT,
    setUsersAT,
    UNFOLLOW_FRIENDS,
    unfollowFriendsAT
} from "./redux-store";


type photosType = {
    small:string | null
    large:string | null
}

export type userItemType = {
    name: string
    id: number
    uniqueUrlName:string | null
    photos: photosType
    status:string | null
    followed:boolean
}


export type usersPageType = {
    items: userItemType[]
    totalCount:number
    usersOnPage:number
    currentPage:number
    isLoading:boolean
}

const initialState:usersPageType = {
    items: [],
    totalCount:0,
    usersOnPage:5,
    currentPage:1,
    isLoading:false
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
        default:
            return state
    }
}

//переименуем AC в названия без AC для сокращения кода в mapDispatchToProps
export const followFriends:((isFollow:boolean, userId:number) => followFriendsAT) = (isFollow, userId) => ({type: FOLLOW_FRIENDS, isFollow:isFollow, userID:userId})
export const unfollowFriends:((isFollow:boolean, userId:number) => unfollowFriendsAT) = (isFollow, userId) => ({type: UNFOLLOW_FRIENDS, isFollow, userID:userId})
export const setUsers:((userList:userItemType[]) => setUsersAT) = (userList) => ({type: SET_USERS, users:userList})
export const setCurrentPage:((currentPage:number) => setCurrentPageAT) = (currentPage) => ({type: "SET-PAGE", currentPage:currentPage})
export const setTotalUsersCount:((totalUsersCount:number) => setTotalUsersCountAT) = (totalUsersCount) => ({type: SET_TOTAL_USER_COUNT, totalCount:totalUsersCount})
export const setIsLoading:((isLoading:boolean)=> setIsLoadingAT) = (isLoading) => ({type:SET_IS_LOADING, isLoading})
