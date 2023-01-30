import React from "react";
import MyPosts from "./MyPosts";
import {addNewPostCreateAction, changeNewPostTextCreateAction} from "../../../redux/profilePage-reducer";
import {connect} from "react-redux";
import {stateType} from "../../../redux/store";


// type storePropsType = {
//     store: storeType
//     // postData: postDataType[]
//     // newPostText: string
//     // dispatch:(action:actionsType) => void
//     // addPost: (postContent: string) => void
//     // addPost: () => void
//     // changeNewPostText: (newPostText: string) => void
// }


// const MyPostsContainer = (props: storePropsType) => {
//
//     const state = props.store.getState()
//     // const addPostOnClickHandler = () => {
//     //     // if (textAreaPostRef.current) {
//     //     //     props.addPost(textAreaPostRef.current.value)
//     //     // }
//     //     // props.addPost()
//     //     props.dispatch(addNewPostCreateAction())
//     //     // props.dispatch({type:"ADD-NEW-POST"})
//     // }
//     //
//     // const onChangePostChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
//     //         // props.changeNewPostText(textAreaPostRef.current.value)
//     //         // props.dispatch({type:"CHANGE-NEW-POST-TEXT", newPostText:textAreaPostRef.current.value})
//     //         props.dispatch(changeNewPostTextCreateAction(e.currentTarget.value))
//     //         // props.dispatch({type:"CHANGE-NEW-POST-TEXT", newPostText:e.currentTarget.value})
//     // }
//     // const addPostsBlock =
//     //     <div className={s.newPost_block}>
//     //         <div>
//     //             <textarea
//     //                 onChange={onChangePostChangeHandler}
//     //                 value={props.newPostText}
//     //             />
//     //         </div>
//     //         <div>
//     //             <button onClick={addPostOnClickHandler}>Add new post</button>
//     //         </div>
//     //     </div>
//     // const mappedPostBlock =
//     //     <div className={s.posts}>
//     //         {state.profilePage.postData.map(p => {
//     //             return (
//     //                 <Post key={p.id} postContent={p.postContent}/>
//     //             )
//     //         })}
//     //     </div>
//
//     const onChangePostText = (text: string) => props.store.dispatch(changeNewPostTextCreateAction(text))
//     const onClickAddPost = () => props.store.dispatch(addNewPostCreateAction())
//
//     return (
//         <MyPosts
//             postData={state.profilePage.postData}
//             newPostText={state.profilePage.newPostText}
//             onChangePostText={onChangePostText}
//             onClickAddPost={onClickAddPost}
//         />)
//
//
// }

const mapStateToProps = (state:stateType) => {
    return{
        postData:state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch:any) => {
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



