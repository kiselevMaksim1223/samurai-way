import React from "react";
import {Dialogs} from "./Dialogs";
import {storeType} from "../../App";
import {addNewMessageBodyCreateAction, changeNewMessageTextCreateAction} from "../../redux/dialogPage-reducer";


type DialogsDataPropsType = {
    store:storeType
}


export const DialogsContainer = (props: DialogsDataPropsType) => {
    // const addMessageOnClickHandler = () => {
    //     props.dispatch(addNewMessageBodyCreateAction())
    //     // props.dispatch({type:"ADD-NEW-MESSAGE"})
    // }
    //
    // const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let newText = e.currentTarget.value
    //     props.dispatch(changeNewMessageTextCreateAction(newText))
    //     // props.dispatch({type:"CHANGE-NEW-MESSAGE-TEXT", newMessageBody:newText})
    // }
    // const dialogsAddMessageBlock =
    //     <div className={s.createMessageWrapper}>
    //         <div className={s.newPost_block}>
    //             <div>
    //                 <textarea value={props.newMessageBody} onChange={onChangeTextHandler}></textarea>
    //             </div>
    //             <div>
    //                 <button onClick={addMessageOnClickHandler}>Add new message</button>
    //             </div>
    //         </div>
    //     </div>

    const state = props.store.getState()

    const onChangeMessageBody = (text:string) => {props.store.dispatch(changeNewMessageTextCreateAction(text))}
    const onClickAddMessageBody = () => props.store.dispatch(addNewMessageBodyCreateAction())

    return (<Dialogs
        dialogItemData = {state.dialogsPage.dialogItemData}
        messageItemData = {state.dialogsPage.messageItemData}
        onChangeMessageBody = {onChangeMessageBody}
        onClickAddMessageBody = {onClickAddMessageBody}
        newMessageBody = {state.dialogsPage.newMessageBody}
    />)
}