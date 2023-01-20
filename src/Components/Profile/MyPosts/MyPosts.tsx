import React, {useRef} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {actionType, postDataType} from "../../../redux/state";
// import {postDataType} from "../../../index";

type postDataPropsType = {
    postData: postDataType[]
    newPostText: string
    dispatch:(action:actionType) => void
    // addPost: (postContent: string) => void
    // addPost: () => void
    // changeNewPostText: (newPostText: string) => void
}


const MyPosts = (props: postDataPropsType) => {


    let textAreaPostRef = useRef<HTMLTextAreaElement>(null)

    const addPostOnClickHandler = () => {
        // if (textAreaPostRef.current) {
        //     props.addPost(textAreaPostRef.current.value)
        // }
        // props.addPost()
        props.dispatch({type:"ADD-NEW-POST"})
    }

    const onChangePostChangeHandler = () => {
        if (textAreaPostRef.current) {
            // props.changeNewPostText(textAreaPostRef.current.value)
            props.dispatch({type:"CHANGE-NEW-POST-TEXT", newPostText:textAreaPostRef.current.value})
        }
    }


    const addPostsBlock =
        <div className={s.newPost_block}>
            <div>
                <textarea
                    onChange={onChangePostChangeHandler}
                    ref={textAreaPostRef}
                    value={props.newPostText}
                />
            </div>
            <div>
                <button onClick={addPostOnClickHandler}>Add new post</button>
            </div>
        </div>

    const mappedPostBlock =
        <div className={s.posts}>
            {props.postData.map(p => {
                return (
                    <Post key={p.id} postContent={p.postContent}/>
                )
            })}
        </div>


    return (
        <div className={s.posts_title}>
            <h3>My posts</h3>

            {addPostsBlock}

            {mappedPostBlock}
        </div>
    )


}

export default MyPosts;

