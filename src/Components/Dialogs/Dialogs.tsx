import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {dialogItemDataType, messageItemDataType} from "../../redux/state";
// import {dialogItemType, messageItemType} from "../../index";


type DialogsDataPropsType = {
    dialogItemData:dialogItemDataType[]
    messageItemData:messageItemDataType[]
}




export const Dialogs = (props:DialogsDataPropsType) => {

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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems} >
                {props.dialogItemData.map(di => {
                    return(
                        <DialogItem key={di.id} name ={di.name} id = {di.id}/>
                    )
                })}

            </div>

            <div className={s.messages}>
                {props.messageItemData.map(di => {
                    return(
                        <MessageItem key={di.id} id={di.id} message ={di.message}/>
                    )
                })}

            </div>
        </div>
    )
}