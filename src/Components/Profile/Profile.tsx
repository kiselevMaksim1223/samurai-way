import React from "react";
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainerSuper} from "./MyPosts/MyPostsContainer";

import {profileInfoType} from "../../redux/profilePage-reducer";

export type profileType = {
    profileInfo:profileInfoType | null
}

const Profile = (props:profileType) => {

    return <div className={s.content}>
        <ProfileInfo profileInfo={props.profileInfo}/>
        <MyPostsContainerSuper/>

    </div>
}

export default Profile;

