import React from "react";
import MyPosts from "./MyPosts";
import {
    addNewPost,
    changeNewPostText, postDataType,
} from "../../../redux/profilePage-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStateToProps = {
    postData:postDataType[]
    newPostText:string
}

type MapDispatchToProps = {
    onChangePostText: (text: string) => void
    onClickAddPost: () => void
}

export type postDataPropsType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state:AppStateType):MapStateToProps => {
    return{
        postData:state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToProps => {
    return{
        onChangePostText: (text: string) => {
            dispatch(changeNewPostText(text))
        },
        onClickAddPost: () => {
            dispatch(addNewPost())
        }
    }
}

export const MyPostsContainerSuper = connect(mapStateToProps, mapDispatchToProps)(MyPosts)



