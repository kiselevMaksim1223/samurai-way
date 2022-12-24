import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

type postDataType = {
    id:number
    postContent:string
}

const MyPosts = () => {

    const postData:postDataType[] = [
        {id:1, postContent:"My first post"},
        {id:2, postContent:"HelloFW"},
        {id:3, postContent:"Do you know Lil Peep?"},
        {id:4, postContent:"Anna"},
        {id:5, postContent:"Igor"},
    ]

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
                {postData.map(p => {
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

