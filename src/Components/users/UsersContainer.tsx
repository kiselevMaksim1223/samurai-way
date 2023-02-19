import React from "react";
import {connect} from "react-redux";
import {
    AppStateType,
} from "../../redux/redux-store";
import {
    followFriends, setCurrentPage, setIsLoading, setTotalUsersCount,
    setUsers,
    unfollowFriends,
} from "../../redux/user-page-reducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";

type photosType = {
    small:string | null
    large:string | null
}

export type userItemType = {
    name: string
    id: number
    uniqueUrlName:string | null
    photos: photosType
    status:string | null
    followed:boolean
}

export type usersPageType = {
    items: userItemType[]
    totalCount:number
    usersOnPage:number
    currentPage:number
    isLoading:boolean
}


export class UsersClass extends React.Component<usersPropsType, usersPageType> {

    constructor(props: usersPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.setIsLoading(true)
        axios
            .get<usersPageType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`)
            .then(response => {
                this.props.setIsLoading(false)
                console.log(response)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onClickUnfollowHandler = (isFollowed: boolean, userId: number) => {
        return this.props.unfollowFriends(isFollowed, userId)

    }

    onClickFollowHandler = (isFollowed: boolean, userId: number) => {
        return this.props.followFriends(isFollowed, userId)
    }

    onClickChangePageHandler = (currentPage: number) => {
        this.props.setIsLoading(true)
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.usersOnPage}`)
            .then(response => {
                this.props.setIsLoading(false)
                console.log(response)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        // console.log(this.props.currentPage)
        // console.log(this.props.totalCount)
        //
        // const countOfPages: number = Math.ceil(this.props.totalCount / this.props.usersOnPage)
        // const pages: number[] = []
        // for (let i = 1; i <= countOfPages; i++) {
        //     pages.push(i)
        // }
        // //карусель страниц
        // const CPFirst = this.props.currentPage - 2 < 0 ? 0 : this.props.currentPage - 2
        // const CPLast = (this.props.currentPage + 2)
        // const slicedPages = pages.slice(CPFirst, CPLast)
        //
        // return <>
        //     <div className={s.pages}>
        //         {slicedPages.map((p, i) => {
        //             return <span key={i} onClick={this.onClickChangePageHandler(p)}
        //                          className={this.props.currentPage === p ? s.span + " " + s.currentPage : s.span}>
        //                 {p}
        //             </span>
        //         })}
        //         <span>{`...${pages[pages.length - 1]}`}</span>
        //     </div>
        //
        //     <div className={s.usersContainer}>
        //         {this.props.items.map(u => {
        //             return (
        //                 <div key={u.id} className={s.userItem}>
        //                     <div className={s.imgBlock}>
        //                         <img alt={"213"}
        //                              src={u.photos.large !== null ? u.photos.large : anna}/>
        //                     </div>
        //                     <div>
        //                         <p className={s.userName}>{u.name}</p>
        //                         {u.followed
        //                             ? <button onClick={this.onClickUnfollowHandler(u.followed, u.id)}>UnFollow</button>
        //                             : <button onClick={this.onClickFollowHandler(u.followed, u.id)}>Follow</button>}
        //                     </div>
        //                 </div>
        //             )
        //         })}
        //     </div>
        return <>
            {this.props.isLoading
                ? <Preloader/>
                : <Users
                    items={this.props.items}
                    usersOnPage={this.props.usersOnPage}
                    totalCount={this.props.totalCount}
                    currentPage={this.props.currentPage}
                    onClickChangePageHandler={this.onClickChangePageHandler}
                    onClickFollowHandler={this.onClickFollowHandler}
                    onClickUnfollowHandler={this.onClickUnfollowHandler}
                />}
        </>
    }
}

type MapStateToProps = {
    items: userItemType[]
    usersOnPage: number
    totalCount: number
    currentPage: number
    isLoading: boolean
}
type MapDispatchToProps = {
    followFriends: (isFollow: boolean, userId: number) => void
    unfollowFriends:(isFollow: boolean, userId: number) => void
    setUsers:(userList: userItemType[]) => void
    setCurrentPage:(currentPage: number) => void
    setTotalUsersCount:(setTotalUsersCount: number) => void
    setIsLoading: (isLoading:boolean) => void
}

export type usersPropsType = MapStateToProps & MapDispatchToProps

const MapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        items: state.friends_usersPages.items,
        usersOnPage: state.friends_usersPages.usersOnPage,
        totalCount: state.friends_usersPages.totalCount,
        currentPage: state.friends_usersPages.currentPage,
        isLoading: state.friends_usersPages.isLoading
    }
}

// const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//     return {
//         followFriends: (isFollow, userId) => {
//             let action: followFriendsAT = followFriends(isFollow, userId)
//             dispatch(action)
//         },
//         unfollowFriends: (isFollow, userId) => {
//             let action: unfollowFriendsAT = unfollowFriends(isFollow, userId)
//             dispatch(action)
//         },
//         setUsers: (userList) => {
//             let action: setUsersAT = setUsers(userList)
//             dispatch(action)
//         },
//         setCurrentPage: (currentPage) => {
//             let action: setCurrentPageAT = setCurrentPage(currentPage)
//             dispatch(action)
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             let action: setTotalUsersCountAT = setTotalUsersCount(totalUsersCount)
//             dispatch(action)
//         },
//         setIsLoading: (isLoading) => {
//             let action: setIsLoadingAT = setIsLoading(isLoading)
//             dispatch(action)
//         }
//     }
// }

export const UsersContainer = connect(
    MapStateToProps,
    // MapDispatchToProps, это объект и если указать его сразу в коннекте, то
    // " ...если вы передаете в connect вторым аргументом не mapDispatchToProps,
    // а объект с AC, то connect оборачивает ваши AC в функцию-обертку () => store.dispatch(AC) и передаёт в props компонента."
    // типизация остается прежней!!!
    {followFriends, unfollowFriends, setUsers, setCurrentPage, setTotalUsersCount, setIsLoading}
)
(UsersClass)