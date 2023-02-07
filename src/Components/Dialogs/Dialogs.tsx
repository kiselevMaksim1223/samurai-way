import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {AddTextItem} from "../AddTextItem/AddTextItem";
import {DialogsDataPropsType} from "./DialogsContainer";


export const Dialogs = (props: DialogsDataPropsType) => {

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


    const onChangeMessageBodyCallBack = (text:string) =>  props.onChangeMessageBody(text)
    const onClickAddMessageBodyCallBack = () => props.onClickAddMessageBody()

    return (
        <div className={s.dialogs}>
            {mappedDialog}
            {mappedMessage}
            <AddTextItem
                value={props.newMessageBody}
                buttonName={"Add new message"}
                onChangeCallback={onChangeMessageBodyCallBack}
                onClickCallback={onClickAddMessageBodyCallBack}
            />
        </div>
    )
}