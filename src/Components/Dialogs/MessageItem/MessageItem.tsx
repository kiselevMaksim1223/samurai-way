import s from "../Dialogs.module.css";
import React from "react";
import {messageItemType} from "../../../index";

export const MessageItem = (props: messageItemType) => {

    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}