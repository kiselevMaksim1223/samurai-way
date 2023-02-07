import s from "../Dialogs.module.css";
import React from "react";
import {messageItemDataType} from "../../../redux/dialogPage-reducer";

export const MessageItem = (props: messageItemDataType) => {

    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}