import {renderEntireTree} from "../render";

export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPage
    sideBar: sideBarPage
}

export type profilePageType = {
    postData: postDataType[]
    newPostText:string
}

export type dialogsPage = {
    dialogItemData: dialogItemDataType[]
    messageItemData: messageItemDataType[]
}

export type sideBarPage = {
    friendsList: friendListItemType[]
}

export type dialogItemDataType = {
    id: number
    name: string
}

export type messageItemDataType = {
    id: number
    message: string
}

export type postDataType = {
    id: number
    postContent: string
}

export type friendListItemType = {
    id: number
    friend: string
}


// const dialogItemData:dialogItemType[] = [
//     {id:1, name:"Vasa"},
//     {id:2, name:"Dima"},
//     {id:3, name:"Sasha"},
//     {id:4, name:"Anna"},
//     {id:5, name:"Igor"},
// ]
//
// const messageItemData:messageItemType[] = [
//     {id:1, message:"Hi"},
//     {id:2, message:"Good"},
//     {id:3, message:"Nonononnono"},
//     {id:4, message:"FUCK me"},
// ]
//
// const postData:postDataType[] = [
//     {id:1, postContent:"My first post"},
//     {id:2, postContent:"HelloFW"},
//     {id:3, postContent:"Do you know Lil Peep?"},
//     {id:4, postContent:"Anna"},
//     {id:5, postContent:"Igor"},
// ]

export const state: stateType = {
    profilePage: {
        postData: [
            {id: 1, postContent: "My first post"},
            {id: 2, postContent: "HelloFW"},
            {id: 3, postContent: "Do you know Lil Peep?"},
            {id: 4, postContent: "Anna"},
            {id: 5, postContent: "Igor"},
        ],
        newPostText: "SAMURAIS"
    },
    dialogsPage: {
        dialogItemData: [
            {id: 1, name: "Vasa"},
            {id: 2, name: "Dima"},
            {id: 3, name: "Sasha"},
            {id: 4, name: "Anna"},
            {id: 5, name: "Igor"},
        ],
        messageItemData: [
            {id: 1, message: "Hi"},
            {id: 2, message: "Good"},
            {id: 3, message: "Nonononnono"},
            {id: 4, message: "FUCK me"},
        ]
    },
    sideBar: {
        friendsList: [
            {id: 1, friend: "Vasa"},
            {id: 2, friend: "Asa"},
            {id: 3, friend: "Denny"},
            {id: 4, friend: "Ron"},
        ]
    }
}

export const addNewPost = () => {

    const newPost = {
        id: 5,
        //сообщение берем из стейта, так как оно после ввода в ->//
        // -> текс эреа попадает в стейт//
        postContent: state.profilePage.newPostText
    }
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = ""
    renderEntireTree(state)
}

export const changeNewPostText = (newPostText: string) => {


    state.profilePage.newPostText = newPostText
    renderEntireTree(state)
}
