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
    onClickFollowHandler: (isFollow: boolean, userId: number) => void
    onClickUnfollowHandler: (isFollow: boolean, userId: number) => void

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
                    return <span key={i} onClick={() => props.onClickChangePageHandler(p)}
                                 className={props.currentPage === p ? s.span + " " + s.currentPage : s.span}>
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
                                    <img alt={"213"}
                                         src={u.photos.large !== null ? u.photos.large : anna}/>
                                </NavLink>
                            </div>
                            <div>
                                <p className={s.userName}>{u.name}</p>
                                {u.followed
                                    ? <button
                                        onClick={() => props.onClickUnfollowHandler(u.followed, u.id)}>UnFollow</button>
                                    : <button
                                        onClick={() => props.onClickFollowHandler(u.followed, u.id)}>Follow</button>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}
    ;

