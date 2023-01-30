import React from "react";
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainerSuper} from "./MyPosts/MyPostsContainer";




// type profileDataType = {
//     // postData:postDataType[]
//     // newTextPost:string
//     // dispatch:(action:actionsType) => void
//     // addPost:(postContent:string) => void
//     // addPost:() => void
//     // changeNewPostText: (newPostText: string) => void
// }

const Profile = () => {

    // const postData:postDataType[] = [
    //     {id:1, postContent:"My first post"},
    //     {id:2, postContent:"HelloFW"},
    //     {id:3, postContent:"Do you know Lil Peep?"},
    //     {id:4, postContent:"Anna"},
    //     {id:5, postContent:"Igor"},
    // ]

    return <div className={s.content}>
        <ProfileInfo />
        <MyPostsContainerSuper/>

        {/*<MyPostsContainer*/}
        {/*    store = {store}*/}
        {/*    // postData={props.postData}*/}
        {/*    // newPostText={props.newTextPost}*/}
        {/*    // dispatch={props.dispatch}*/}
        {/*    // addPost = {props.dispatch}*/}
        {/*    // changeNewPostText ={props.dispatch}*/}
        {/*/>*/}

    </div>
}

export default Profile;

