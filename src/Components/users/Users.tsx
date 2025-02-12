import React from 'react';
import s from "./Users.module.css"
import anna from "../Friends/avas/Anna.jpg";
import {userItemType} from "./UsersContainer";
import {NavLink} from "react-router-dom";


type usersType = {
    items: userItemType[]
    totalCount: number
    usersOnPage: number
    currentPage: number
    onClickChangePageHandler: (currentPage: number) => void
    // onClickFollowHandler: (isFollow: boolean, userId: number) => void
    // onClickUnfollowHandler: (isFollow: boolean, userId: number) => void
    followingInProgress: Array<number>
    setIsFollowing: (isFollowing: boolean, userId: number) => void
    unFollowFriendTC: (isFollowing: boolean, userId: number) => void
    followFriendTC: (isFollowing: boolean, userId: number) => void
}

export const Users = (props: usersType) => {

        const countOfPages: number = Math.ceil(props.totalCount / props.usersOnPage)
        const pages: number[] = []
        for (let i = 1; i <= countOfPages; i++) {
            pages.push(i)
        }
        //карусель страниц
        const CPFirst = props.currentPage - 2 < 0 ? 0 : props.currentPage - 2
        const CPLast = (props.currentPage + 2)
        const slicedPages = pages.slice(CPFirst, CPLast)

        return (<>
                <div className={s.pages}>
                    {slicedPages.map((p, i) => {
                        return <span
                            key={i} onClick={() => props.onClickChangePageHandler(p)}
                            className={props.currentPage === p ? s.span + " " + s.currentPage : s.span}
                        >
                        {p}
                    </span>
                    })}
                    <span>{`...${pages[pages.length - 1]}`}</span>
                </div>

                <div className={s.usersContainer}>
                    {props.items.map(u => {
                        return (
                            <div key={u.id} className={s.userItem}>
                                <div className={s.imgBlock}>
                                    <NavLink to={"/profile/" + u.id}>
                                        <img
                                            alt={"213"}
                                            src={u.photos.large !== null ? u.photos.large : anna}
                                        />
                                    </NavLink>
                                </div>
                                <div>
                                    <p className={s.userName}>{u.name}</p>
                                    {u.followed
                                        ? <button
                                            // дизейблим кнопку методом проверки есть ли в массиве id пользователя которого мы анфоловим
                                            disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => {
                                                props.unFollowFriendTC(u.followed, u.id)

                                                // props.setIsFollowing(true, u.id)
                                                // // axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, settings)
                                                // usersAPI.unFollowUser(u.id)
                                                //     .then(res => {
                                                //         if (res.resultCode === 0) {
                                                //             props.onClickUnfollowHandler(u.followed, u.id)
                                                //         }
                                                //         props.setIsFollowing(false, u.id)
                                                //     })
                                            }}>UnFollow</button>

                                        : <button
                                            disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => {
                                                props.followFriendTC(u.followed, u.id)
                                                // props.setIsFollowing(true, u.id)
                                                // // axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {}, settings)
                                                // usersAPI.followUser(u.id)
                                                //     .then(res => {
                                                //         if (res.resultCode === 0) {
                                                //             props.onClickFollowHandler(u.followed, u.id)
                                                //         }
                                                //         props.setIsFollowing(false, u.id)
                                                //     })
                                            }}>Follow</button>}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
;

