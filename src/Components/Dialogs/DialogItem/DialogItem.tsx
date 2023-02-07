import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {dialogItemDataType} from "../../../redux/dialogPage-reducer";

export const DialogItem = (props: dialogItemDataType) => {

    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}> {props.name} </NavLink>
        </div>
    )
}