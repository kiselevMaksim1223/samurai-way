import React from "react";
import MyPosts from "./MyPosts";
import {
    addNewPostCreateAction,
    changeNewPostTextCreateAction,
    profilePageType
} from "../../../redux/profilePage-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStateToProps = profilePageType

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
            dispatch(changeNewPostTextCreateAction(text))
        },
        onClickAddPost: () => {
            dispatch(addNewPostCreateAction())
        }
    }
}

export const MyPostsContainerSuper = connect(mapStateToProps, mapDispatchToProps)(MyPosts)



