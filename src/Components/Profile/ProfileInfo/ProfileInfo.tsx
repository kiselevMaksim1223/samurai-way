import s from "./ProfileInfo.module.css";
import React from "react";

export const ProfileInfo = () => {

    return (
        <div>
            <div>
                <img className={s.img} src="https://cdn.fishki.net/upload/post/201508/03/1617182/6_22.jpg" alt=""/>
            </div>
            <div className={s.ava_desc}>
                avatar + desc
            </div>
        </div>
    )
}