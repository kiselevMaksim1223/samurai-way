import axios from "axios";
import {profileInfoType} from "../redux/profilePage-reducer";
import {authDataType} from "../redux/auth-reducer";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "b5fcdfe7-6baa-4918-9c3b-3910bf1accdc"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, usersOnPage: number) {
        return instance.get<usersResponseAPIType>(`users?page=${currentPage}&count=${usersOnPage}`)
            .then((res) => res.data)
    },
    followUser(userId: number) {
        return (
            instance.post<commonResponseAPIType>(`follow/${userId}`, {})
                .then((res) => res.data)
        )
    },
    unFollowUser(userId: number) {
        return (
            instance.delete<commonResponseAPIType>(`follow/${userId}`)
                .then((res) => res.data)
        )
    },
}

export const profileAPI = {
    getProfile(userId: number) {
        return (
            instance.get<profileInfoType>(`profile/${!userId ? 2 : userId}`)
                .then((res) => res.data)
        )
    },
}

export const headerAPI = {
    authMe() {
        return (
            instance.get<commonResponseAPIType<authDataType>>("auth/me")
                .then(res => res.data)
        )
    }
}
type commonResponseAPIType<T = {}> = {
    data: T
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: number
}

type usersResponseAPIType = {
    error: string | null
    items: Array<userInfoAPIType>
    totalCount:number
}

type userInfoAPIType = {
    followed: boolean
    id: number
    name: string
    photos: photoAPIType
    status: string | null
    uniqueUrlName: string | null
}

type photoAPIType = {
    small: string | null
    large: string | null
}
