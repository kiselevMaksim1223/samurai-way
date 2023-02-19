import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {AddTextItem} from "../../AddTextItem/AddTextItem";
import {postDataPropsType} from "./MyPostsContainer";


const MyPosts = (props: postDataPropsType) => {

    const mappedPostBlock =
        <div className={s.posts}>
            {props.postData.map(p => {
                return (
                    <Post key={p.id} postContent={p.postContent}/>
                )
            })}
        </div>

    const onChangePostTextCallBack = (text:string) => props.onChangePostText(text)
    const onClickAddPostCallBack = () => props.onClickAddPost()

    return (
        <div className={s.posts_title}>
            <h3>My posts</h3>
            <AddTextItem
                value={props.newPostText}
                buttonName={"Add new post"}
                onChangeCallback={onChangePostTextCallBack}
                onClickCallback={onClickAddPostCallBack}
            />

            {mappedPostBlock}
        </div>
    )
}

export default MyPosts;

