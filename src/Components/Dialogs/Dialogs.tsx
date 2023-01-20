import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {
    actionType,
    addNewMessageBodyCreateAction,
    changeNewMessageTextCreateAction,
    dialogItemDataType,
    messageItemDataType
} from "../../redux/state";
import {AddTextItem} from "./MessageItem/AddMessage/AddTextItem";
// import {dialogItemType, messageItemType} from "../../index";


type DialogsDataPropsType = {
    dialogItemData: dialogItemDataType[]
    messageItemData: messageItemDataType[]
    newMessageBody: string
    dispatch:(action:actionType) => void
}


export const Dialogs = (props: DialogsDataPropsType) => {

    // const dialogItemData:dialogItemType[] = [
    //     {id:1, name:"Vasa"},
    //     {id:2, name:"Dima"},
    //     {id:3, name:"Sasha"},
    //     {id:4, name:"Anna"},
    //     {id:5, name:"Igor"},
    // ]
    //
    //  const messageItemData:messageItemType[] = [
    //      {id:1, message:"Hi"},
    //      {id:2, message:"Good"},
    //      {id:3, message:"Nonononnono"},
    //      {id:4, message:"FUCK me"},
    //  ]

    const mappedDialog =
        <div className={s.dialogsItems}>
            {props.dialogItemData.map(di => {
                return (
                    <DialogItem key={di.id} name={di.name} id={di.id}/>
                )
            })}
        </div>

    const mappedMessage =
        <div className={s.messages}>
            {props.messageItemData.map(di => {
                return (
                    <MessageItem key={di.id} id={di.id} message={di.message}/>
                )
            })}
        </div>


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

    const onChangeMessageBody = (text:string) => {props.dispatch(changeNewMessageTextCreateAction(text))}
    const onClickAddMessageBody = () => props.dispatch(addNewMessageBodyCreateAction())

    return (
        <div className={s.dialogs}>
            {mappedDialog}
            {mappedMessage}
            {/*{dialogsAddMessageBlock}*/}
            <AddTextItem
                value={props.newMessageBody}
                buttonName={"Add new message"}
                onChangeCallback={onChangeMessageBody}
                onClickCallback={onClickAddMessageBody}
            />
        </div>
    )
}