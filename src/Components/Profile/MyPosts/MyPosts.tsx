import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {postDataType} from "../../../index";

type postDataPropsType = {
    postData:postDataType[] }


const MyPosts = (props:postDataPropsType) => {



    return (
        <div className={s.posts_title}>
            <h3>My posts</h3>
            <div className={s.newPost_block}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add new post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.postData.map(p => {
                    return(
                        <Post key={p.id} postContent={p.postContent}/>
                    )
                })}
                {/*<Post postContent="My first post"/>*/}
                {/*<Post postContent="HelloFW"/>*/}
                {/*<Post postContent="Do you know Lil Peep?"/>*/}
            </div>
        </div>
    )


}

export default MyPosts;

