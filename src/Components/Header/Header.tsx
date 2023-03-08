import React, {FC, ReactNode} from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

type headerPropsType = {
    children?:ReactNode
    isAuth:boolean
    login:string | null
}

const Header:FC<headerPropsType> = (props) => {
    return <header className={s.header}>
        <img
            src="https://e7.pngegg.com/pngimages/41/701/png-clipart-logo-graphic-design-graphy-grapher-logo-graphy-angle-text.png"
            alt=""
        />
        <div className={s.auth}>
            {props.isAuth
                ? props.login as string
                :<NavLink to={"/login"}>Login</NavLink>
            }

        </div>
    </header>
}

export default Header;