import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postDataType} from "../../redux/state";
// import {postDataType} from "../../index";


type profileDataType = {
    postData:postDataType[]
    addPost:(postContent:string) => void
}

const Profile = (props:profileDataType) => {

    // const postData:postDataType[] = [
    //     {id:1, postContent:"My first post"},
    //     {id:2, postContent:"HelloFW"},
    //     {id:3, postContent:"Do you know Lil Peep?"},
    //     {id:4, postContent:"Anna"},
    //     {id:5, postContent:"Igor"},
    // ]

    return <div className={s.content}>
        <ProfileInfo />
        <MyPosts
            postData={props.postData}
            addPost = {props.addPost}
        />
    </div>


}

export default Profile;

