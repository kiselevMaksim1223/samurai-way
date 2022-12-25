import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {dialogItemType} from "../../../index";



export const DialogItem = (props: dialogItemType) => {

    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}> {props.name} </NavLink>
        </div>
    )
}