import React from "react";
import Profile from "./Profile";
import {profileInfoType, profilePageType, setProfileInfo} from "../../redux/profilePage-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {RouteComponentProps, withRouter} from "react-router-dom";



export class ProfileClass extends React.Component<newProfilePropsType, profilePageType> {


    componentDidMount() {
        debugger
        const userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                console.log(response)
                this.props.setProfileInfo(response.data)
            })
    }

    render() {
        return(
            <Profile profileInfo ={this.props.profileInfo}/>
            )

    }
}

type PathParamsType = {
    userId:string
}

//создаем новый тип и прописываем его классовой компоненте
export type newProfilePropsType = RouteComponentProps<PathParamsType> & profilePropsType

export type profilePropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    profileInfo:profileInfoType | null
}

type mapDispatchToPropsType = {
    setProfileInfo:(profileInfo:profileInfoType) => void
}

const MapStateToProps = (state:AppStateType) => {
    return{
        profileInfo: state.profilePage.profileInfo
   }}


const WithRouteProfileContainer = withRouter(ProfileClass)

export const ProfileContainer = connect(MapStateToProps, {setProfileInfo})(WithRouteProfileContainer)

