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
    newMessageBody:string
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

// export type callBack = ((state:stateType) => void)

export type actionType = {
    type: "ADD-NEW-POST" | "CHANGE-NEW-POST-TEXT" | "ADD-NEW-MESSAGE" | "CHANGE-NEW-MESSAGE-TEXT"
    newPostText?:string
    newMessageBody?:string
}

export type storeType = {
    _state:stateType
    _renderEntireTree: (state:stateType) => void
    getState: () => stateType
    subscribe:(observer:(state:stateType) => void) => void
    dispatch: (action:actionType) => void


    // addNewPost:() => void
    // changeNewPostText:(newPostText: string) => void
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

// let renderEntireTree = (state:stateType) => {
//     console.log("state rendered")
//
// }

export let store:storeType = {
    _state: {
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
            ],
            newMessageBody: "fsfd"
        },
        sideBar: {
            friendsList: [
                {id: 1, friend: "Vasa"},
                {id: 2, friend: "Asa"},
                {id: 3, friend: "Denny"},
                {id: 4, friend: "Ron"},
            ]
        }
    },
    _renderEntireTree(state:stateType) {
        console.log("state rendered")
    },

    getState(){
        return this._state
    },
    subscribe(observer){
       this._renderEntireTree = observer
    },

    // addNewPost(){
    //     const newPost = {
    //         id:5,
    //         postContent: this._state.profilePage.newPostText
    //         //сообщение берем из стейта, так как оно после ввода в ->//
    //         // -> текс эреа попадает в стейт//
    //     }
    //     this._state.profilePage.postData.push(newPost)
    //     this._state.profilePage.newPostText = ""
    //     this._renderEntireTree(this._state)
    // },
    // changeNewPostText(newPostText: string){
    //     this._state.profilePage.newPostText = newPostText
    //     this._renderEntireTree(this._state)
    // },
    dispatch(action){
        if (action.type === "ADD-NEW-POST"){
            const newPost = {
                id:5,
                postContent: this._state.profilePage.newPostText
                //сообщение берем из стейта, так как оно после ввода в ->//
                // -> текс эреа попадает в стейт//
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ""
            this._renderEntireTree(this._state)
        }
        else if (action.type === "CHANGE-NEW-POST-TEXT"){
            if (action.newPostText != null) {
                this._state.profilePage.newPostText = action.newPostText
            }
            this._renderEntireTree(this._state)
        }
        else if (action.type === "ADD-NEW-MESSAGE") {
            const newMessageBody =  {id: 5, message: this._state.dialogsPage.newMessageBody}
            this._state.dialogsPage.messageItemData.push(newMessageBody)
            this._state.dialogsPage.newMessageBody =""
            this._renderEntireTree(this._state)
        }
        else  if (action.type === "CHANGE-NEW-MESSAGE-TEXT") {
            if (action.newMessageBody != null) {
                this._state.dialogsPage.newMessageBody = action.newMessageBody
            }
            this._renderEntireTree(this._state)
        }
    }
}

export const addNewPostCreateAction
    :(() => actionType) //create Action type
    = () => ({type:"ADD-NEW-POST"})

export const changeNewPostTextCreateAction
    :((newPostText:string) => actionType) //create Action type
    = (newPostText) =>  ({type:"CHANGE-NEW-POST-TEXT", newPostText:newPostText})

export const addNewMessageBodyCreateAction
    :(() => actionType) //create Action type
    = () => ({type:"ADD-NEW-MESSAGE"})

export const changeNewMessageTextCreateAction
    :((newMessageBody:string)=> actionType) //create Action type
    = (newMessageBody) => ({type:"CHANGE-NEW-MESSAGE-TEXT", newMessageBody:newMessageBody})





// export const state: stateType = {
//     profilePage: {
//         postData: [
//             {id: 1, postContent: "My first post"},
//             {id: 2, postContent: "HelloFW"},
//             {id: 3, postContent: "Do you know Lil Peep?"},
//             {id: 4, postContent: "Anna"},
//             {id: 5, postContent: "Igor"},
//         ],
//         newPostText: "SAMURAIS"
//     },
//     dialogsPage: {
//         dialogItemData: [
//             {id: 1, name: "Vasa"},
//             {id: 2, name: "Dima"},
//             {id: 3, name: "Sasha"},
//             {id: 4, name: "Anna"},
//             {id: 5, name: "Igor"},
//         ],
//         messageItemData: [
//             {id: 1, message: "Hi"},
//             {id: 2, message: "Good"},
//             {id: 3, message: "Nonononnono"},
//             {id: 4, message: "FUCK me"},
//         ]
//     },
//     sideBar: {
//         friendsList: [
//             {id: 1, friend: "Vasa"},
//             {id: 2, friend: "Asa"},
//             {id: 3, friend: "Denny"},
//             {id: 4, friend: "Ron"},
//         ]
//     }
// }

// export const addNewPost = () => {
//
//     const newPost = {
//         id: 5,
//         //сообщение берем из стейта, так как оно после ввода в ->//
//         // -> текс эреа попадает в стейт//
//         postContent: state.profilePage.newPostText
//     }
//     state.profilePage.postData.push(newPost)
//     state.profilePage.newPostText = ""
//     renderEntireTree(state)
// }
//
// export const changeNewPostText = (newPostText: string) => {
//     state.profilePage.newPostText = newPostText
//     renderEntireTree(state)
// }
//
// export const subscribe = (observer:callBack) => {
//     renderEntireTree = observer
// }