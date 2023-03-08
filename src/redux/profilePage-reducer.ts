import {AppThunkType} from "./redux-store";
import {profileAPI} from "../api/users-api";


export type postDataType = {
    id: number
    postContent: string
}

export type Contacts = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

export type Photos = {
    small: string;
    large: string;
}

export type profileInfoType = {
    aboutMe: string;
    contacts: Contacts;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: Photos;
}

export type profilePageType = {
    postData: postDataType[]
    newPostText: string
    profileInfo:profileInfoType | null
}


export type addNewPostAT = {
    type: "ADD-NEW-POST"
}
export type changeNewPostAT = {
    type: "CHANGE-NEW-POST-TEXT"
    newPostText: string
}
export type setProfileInfoAT = {
    type:"SET-PROFILE-INFO"
    profileInfo:profileInfoType
}


export type profilePageActionsType = addNewPostAT | changeNewPostAT | setProfileInfoAT

let initialState: profilePageType = {
    postData: [
        {id: 1, postContent: "My first post"},
        {id: 2, postContent: "HelloFW"},
        {id: 3, postContent: "Do you know Lil Peep?"},
        {id: 4, postContent: "Anna"},
        {id: 5, postContent: "Igor"},
    ],
    newPostText: "SAMURAIS",
    profileInfo: null
}

export const profilePageReducer = (state: profilePageType = initialState, action: profilePageActionsType): profilePageType => {
    switch (action.type) {
        case "ADD-NEW-POST":
            const newPost = {
                id: 5,
                postContent: state.newPostText
                //сообщение берем из стейта, так как оно после ввода в ->//
                // -> текс эреа попадает в стейт//
            }
            return {...state, postData: [...state.postData, newPost], newPostText: ""}
        case "CHANGE-NEW-POST-TEXT":
            return {...state, newPostText: action.newPostText}
        case "SET-PROFILE-INFO":
            return {...state, profileInfo:action.profileInfo}
        default:
            return state;
    }
}

export const addNewPost
    : (() => addNewPostAT) //create Action type
    = () => ({type: "ADD-NEW-POST"})

export const changeNewPostText
    : ((newPostText: string) => changeNewPostAT) //create Action type
    = (newPostText) => ({type: "CHANGE-NEW-POST-TEXT", newPostText: newPostText})

export const setProfileInfo
    :((profileInfo:profileInfoType) => setProfileInfoAT)
    = (profileInfo) => ({type:"SET-PROFILE-INFO", profileInfo})


export const getProfileTC = (userId:number):AppThunkType => (dispatch) => {
    debugger
    profileAPI.getProfile(userId)
        .then(res => {
            console.log(res)
            dispatch(setProfileInfo(res))
        })
}