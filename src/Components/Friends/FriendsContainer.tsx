import {connect} from "react-redux";
import {Friends} from "./Friends";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {unfollowFriends, unfollowFriendsAT} from "../../redux/user-page-reducer";
import {usersPageType} from "../users/UsersContainer";


type MapStateToProps = {
    friend_usersPage:usersPageType
}
type MapDispatchToProps = {unFollow:(isFollow:boolean, userId:number) => void}

export type friendsPropsType = MapStateToProps & MapDispatchToProps

const MapStateToProps = (state:AppStateType):MapStateToProps => {
    return{
        friend_usersPage:state.friends_usersPages
    }
}

const MapDispatchToProps = (dispatch:Dispatch):MapDispatchToProps => {
    return{
        unFollow: (isFollow, userID) => {
            let action:unfollowFriendsAT= unfollowFriends(isFollow, userID)
            dispatch(action)
        }
    }
}

export const FriendsContainer = connect(MapStateToProps, MapDispatchToProps)(Friends)
