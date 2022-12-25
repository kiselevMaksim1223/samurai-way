


export type stateType = {
    profilePage:profilePageType
    dialogsPage:dialogsPage
}

export type profilePageType = {
    postData:postDataType[]
}

export type dialogsPage = {
    dialogItemData:dialogItemDataType[]
    messageItemData:messageItemDataType[]
}

export type dialogItemDataType = {
    id:number
    name:string
}

export type messageItemDataType = {
    id:number
    message:string
}

export type postDataType = {
    id:number
    postContent:string
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

export const state:stateType = {
    profilePage: {
        postData:[
            {id:1, postContent:"My first post"},
            {id:2, postContent:"HelloFW"},
            {id:3, postContent:"Do you know Lil Peep?"},
            {id:4, postContent:"Anna"},
            {id:5, postContent:"Igor"},
        ]
    },
    dialogsPage:{
        dialogItemData:[
            {id:1, name:"Vasa"},
            {id:2, name:"Dima"},
            {id:3, name:"Sasha"},
            {id:4, name:"Anna"},
            {id:5, name:"Igor"},
        ],
        messageItemData:[
            {id:1, message:"Hi"},
            {id:2, message:"Good"},
            {id:3, message:"Nonononnono"},
            {id:4, message:"FUCK me"},
        ]
    }
}