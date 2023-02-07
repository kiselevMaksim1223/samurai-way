import React from 'react';
import {friendsPropsType} from "./FriendsContainer";
import {NavLink} from "react-router-dom";


export const Friends = (props: friendsPropsType) => {


    return (
        <div>
            <NavLink to="/users"><button>Find friends</button></NavLink>
            this page in work now!
            {/*{props.friend_usersPage.userList.map(f => {*/}
            {/*        return (*/}
            {/*            <div className={s.wrapper} key={f.id}>*/}
            {/*                <img className={s.avatar} src={f.photos.small} alt={"sorry"}/>*/}
            {/*                <p className={s.name}>{f.name}</p>*/}
            {/*                <button>Unfollow</button>*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*    }*/}
            {/*)}*/}
        </div>
    );
};
