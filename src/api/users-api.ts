
import axios from "axios";
import {usersPageType} from "../redux/user-page-reducer";

const instance = axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    withCredentials:true,
    headers:{
        "API-KEY":"b5fcdfe7-6baa-4918-9c3b-3910bf1accdc"
    }
})

export const usersAPI = {
    getUsers(currentPage:number, usersOnPage:number){
        return instance.get<usersPageType>(`users?page=${currentPage}&count=${usersOnPage}`)
            .then((res) => res.data)
    },
    followUser(userId:number){
        return(
            instance.post(`follow/${userId}`, {})
            .then((res) => res.data)
        )
    },
    unFollowUser(userId:number){
        return(
            instance.delete(`follow/${userId}`)
            .then((res) => res.data)
        )
    },
}

export const profileAPI = {
    getProfile(userId:number) {
        debugger
        return(
            instance.get(`profile/${!userId ? 2: userId}`)
            .then((res) => res.data)
        )
    },

}

export const headerAPI = {
    authMe(){
        return (
            instance.get("auth/me")
                .then(res => res.data)
        )
    }
}