import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType, followFriendsAT, setUsersAT, unfollowFriendsAT} from "../../redux/redux-store";
import {
    followFriendsAC,
    setUsersAC,
    unfollowFriendsAC,
    userItemType,
    usersPageType
} from "../../redux/user-page-reducer";
import {UsersClass} from "./UsersClass";


type MapStateToProps = {
    friend_usersPage:usersPageType
}
type MapDispatchToProps = {
    follow:(isFollow:boolean, userId:number) => void
    unFollow: (isFollow:boolean, userId:number) => void
    setUsers: (userList:userItemType[]) => void

}

export type usersPropsType =  MapStateToProps & MapDispatchToProps

const MapStateToProps = (state:AppStateType):MapStateToProps => {
    return {
        friend_usersPage: state.friends_usersPages
    }
}

const MapDispatchToProps = (dispatch:Dispatch):MapDispatchToProps => {
    return{
        follow:(isFollow,userId) => {
            let action:followFriendsAT = followFriendsAC(isFollow,userId)
            dispatch(action)
        },
        unFollow: (isFollow, userId) => {
            let action:unfollowFriendsAT= unfollowFriendsAC(isFollow,userId)
            dispatch(action)
        },
        setUsers: (userList) => {
            let action:setUsersAT = setUsersAC(userList)
            dispatch(action)
        }
    }
}

export const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(UsersClass)