import React from 'react';
import {friendsPage} from "../../redux/store";
import s from "./Friends.module.css"

type friendsPropsType = {
    friendPage: friendsPage
}

export const Friends = (props: friendsPropsType) => {
    return (
        <div>
            {props.friendPage.friendsList.map(f => {
                    return (
                        <div className={s.wrapper}>
                            <img className={s.avatar} src={f.Avatar} alt={"sorry"}/>
                            <p className={s.name}>{f.friend}</p>
                        </div>
                    )
                }
            )}
        </div>
    );
};
