import React, {useRef} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {postDataType} from "../../../redux/state";
// import {postDataType} from "../../../index";

type postDataPropsType = {
    postData: postDataType[]
    addPost:(postContent:string) => void
}


const MyPosts = (props: postDataPropsType) => {


    let textAreaPostRef = useRef<HTMLTextAreaElement>(null)

    const addPostOnClickHandler = () => {
        if (textAreaPostRef.current) {
            props.addPost(textAreaPostRef.current.value)
            textAreaPostRef.current.value = ""
        }
    }

    const addPostsBlock =
        <div className={s.newPost_block}>
            <div>
                <textarea ref={textAreaPostRef}></textarea>
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

