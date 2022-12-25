import s from "../Dialogs.module.css";
import React from "react";
import {messageItemDataType} from "../../../redux/state";
// import {messageItemType} from "../../../index";

export const MessageItem = (props: messageItemDataType) => {

    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}