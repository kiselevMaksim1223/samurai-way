import React from 'react';
import s from "./Users.module.css"
import {usersPropsType} from "./UsersContainer";
import anna from "../Friends/avas/Anna.jpg";
import axios from "axios";


export const Users = (props: usersPropsType) => {

    if (props.friend_usersPage.items.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            console.log(response)
            props.setUsers(response.data.items)
        })

    }



    const onClickFollowHandler = (isFollowed: boolean, userId: number) => {
        console.log(isFollowed)
        return (
            () => {
                return props.follow(isFollowed, userId)
            }

        )
    }

    const onClickUnfollowHandler = (isFollowed: boolean,userId: number) => {
        console.log(isFollowed)
        return (
            () => {
                return props.unFollow(isFollowed,userId)
            }

        )
    }

    const mappedUsers =
        props.friend_usersPage.items.map(u => {
            return (
                <div key={u.id} className={s.userItem}>
                    <div className={s.imgBlock}><img alt={"wait"} src={u.photos.large !== null ? u.photos.large : anna}/></div>
                    <div>
                        <p className={s.userName}>{u.name}</p>
                        {u.followed
                            ? <button onClick={onClickUnfollowHandler(u.followed, u.id)}>UnFollow</button>
                            :<button onClick={onClickFollowHandler(u.followed, u.id)}>Follow</button>}
                    </div>
                </div>
            )
        })


    return (
        <div className={s.usersContainer}>
            {mappedUsers}
        </div>
    );
};

