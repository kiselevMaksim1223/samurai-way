import React from "react";
import Profile from "./Profile";
import {getProfileTC, profileInfoType, profilePageType, setProfileInfo} from "../../redux/profilePage-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";



export class ProfileClass extends React.Component<newProfilePropsType, profilePageType> {

    componentDidMount() {
        debugger
        const userId = +this.props.match.params.userId
        console.log(userId)
        this.props.getProfileTC(userId)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${!userId ? 2: userId}`)
        // profileAPI.getProfile(userId)
        //     .then(res => {
        //         console.log(res)
        //         this.props.setProfileInfo(res)
        //     })

    }

    render() {
        console.log(this.props)
        debugger
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
    getProfileTC: (userId:number) => void
}

const MapStateToProps = (state:AppStateType) => {
    return{
        profileInfo: state.profilePage.profileInfo
   }}


// const WithRouteProfileContainer = withRouter(ProfileClass)

export const ProfileContainer = connect(MapStateToProps, {setProfileInfo, getProfileTC})(withRouter(ProfileClass))

