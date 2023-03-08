import s from "./ProfileInfo.module.css";
import React from "react";
import emptyPhoto from "./emptyPhoto/emptyPhoto.png"
import {profileType} from "../Profile";


export const ProfileInfo = (props:profileType) => {
    debugger
    return (
        <div>
            <div>
                <img className={s.img} src="https://cdn.fishki.net/upload/post/201508/03/1617182/6_22.jpg" alt=""/>
            </div>
            <div className={s.ava_desc}>
                <div>
                    <div  className={s.ava}>

                        <img src={props.profileInfo !== null || props.profileInfo  ? props.profileInfo.photos.large : emptyPhoto} alt={"no photo now"}/>
                    </div>
                    <p>{props.profileInfo !== null || props.profileInfo ? props.profileInfo.fullName : ""}</p>
                </div>
                <div className={s.job}>
                    <div>
                        looking for a job: {props.profileInfo !== null || props.profileInfo ? props.profileInfo.lookingForAJob : "не нужна мне ваша работа"}
                    </div>
                    <div>
                        description: {props.profileInfo !== null || props.profileInfo ? props.profileInfo.lookingForAJobDescription : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}