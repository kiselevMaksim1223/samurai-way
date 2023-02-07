import React from "react";
import s from "./Users.module.css";
import anna from "../Friends/avas/Anna.jpg";
import axios from "axios";
import {usersPageType} from "../../redux/user-page-reducer";
import {usersPropsType} from "./UsersContainer";


export class UsersClass extends React.Component<usersPropsType, usersPageType> {

    constructor(props: usersPropsType) {
        super(props);
    }

    componentDidMount() {
        axios.get<usersPageType>("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            console.log(response)
            this.props.setUsers(response.data.items)
        })
    }

    onClickUnfollowHandler = (isFollowed: boolean, userId: number) => {
        return (
            () => {
                return this.props.unFollow(isFollowed,userId)
            }
        )
    }

    onClickFollowHandler = (isFollowed: boolean, userId: number) => {
        return (
            () => {

                return this.props.follow(isFollowed, userId)
            }
        )
    }

    render() {
        return <div className={s.usersContainer}>

            {this.props.friend_usersPage.items.map(u => {
                return (
                    <div key={u.id} className={s.userItem}>
                        <div className={s.imgBlock}><img alt={"213"} src={u.photos.large !== null ? u.photos.large : anna}/></div>
                        <div>
                            <p className={s.userName}>{u.name}</p>
                            {u.followed
                                ? <button onClick={this.onClickUnfollowHandler(u.followed, u.id)}>UnFollow</button>
                                : <button onClick={this.onClickFollowHandler(u.followed, u.id)}>Follow</button>}
                        </div>
                    </div>
                )
            })}
        </div>
    }
}

