import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {postDataType} from "../../../redux/store";
import {AddTextItem} from "../../AddTextItem/AddTextItem";


type postDataPropsType = {
    onChangePostText:(text:string) => void
    onClickAddPost:() => void
    postData: postDataType[]
    newPostText: string
    // dispatch:(action:actionsType) => void
    // addPost: (postContent: string) => void
    // addPost: () => void
    // changeNewPostText: (newPostText: string) => void
}




const MyPosts = (props: postDataPropsType) => {

    // const addPostOnClickHandler = () => {
    //     // if (textAreaPostRef.current) {
    //     //     props.addPost(textAreaPostRef.current.value)
    //     // }
    //     // props.addPost()
    //     props.dispatch(addNewPostCreateAction())
    //     // props.dispatch({type:"ADD-NEW-POST"})
    // }
    //
    // const onChangePostChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
    //         // props.changeNewPostText(textAreaPostRef.current.value)
    //         // props.dispatch({type:"CHANGE-NEW-POST-TEXT", newPostText:textAreaPostRef.current.value})
    //         props.dispatch(changeNewPostTextCreateAction(e.currentTarget.value))
    //         // props.dispatch({type:"CHANGE-NEW-POST-TEXT", newPostText:e.currentTarget.value})
    // }
    // const addPostsBlock =
    //     <div className={s.newPost_block}>
    //         <div>
    //             <textarea
    //                 onChange={onChangePostChangeHandler}
    //                 value={props.newPostText}
    //             />
    //         </div>
    //         <div>
    //             <button onClick={addPostOnClickHandler}>Add new post</button>
    //         </div>
    //     </div>
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
            {/*{addPostsBlock}*/}
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

