import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type dialogItemType = {
    id:number
    name:string
}

type messageItemType = {
    id:number
    message:string
}

const DialogItem = (props: dialogItemType) => {

    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}> {props.name} </NavLink>
        </div>
    )
}



const MessageItem = (props:messageItemType) => {

    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}


export const Dialogs = () => {

   const dialogItemData:dialogItemType[] = [
       {id:1, name:"Vasa"},
       {id:2, name:"Dima"},
       {id:3, name:"Sasha"},
       {id:4, name:"Anna"},
       {id:5, name:"Igor"},
   ]

    const messageItemData:messageItemType[] = [
        {id:1, message:"Hi"},
        {id:2, message:"Good"},
        {id:3, message:"Nonononnono"},
        {id:4, message:"FUCK me"},


    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems} >
                {dialogItemData.map(di => {
                    return(
                        <DialogItem key={di.id} name ={di.name} id = {di.id}/>
                    )
                })}

            </div>

            <div className={s.messages}>
                {messageItemData.map(di => {
                    return(
                        <MessageItem key={di.id} id={di.id} message ={di.message}/>
                    )
                })}

            </div>
        </div>
    )
}