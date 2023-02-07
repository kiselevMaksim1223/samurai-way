import {actionsType, addNewPostActionType, changeNewPostActionType} from "./redux-store";

export type postDataType = {
    id: number
    postContent: string
}

export type profilePageType = {
    postData: postDataType[]
    newPostText:string
}

let initialState:profilePageType = {
            postData: [
                {id: 1, postContent: "My first post"},
                {id: 2, postContent: "HelloFW"},
                {id: 3, postContent: "Do you know Lil Peep?"},
                {id: 4, postContent: "Anna"},
                {id: 5, postContent: "Igor"},
            ],
            newPostText: "SAMURAIS"
        }


export const profilePageReducer = (state: profilePageType = initialState, action: actionsType):profilePageType => {
    switch (action.type) {
        case "ADD-NEW-POST":
            const newPost = {
                id: 5,
                postContent: state.newPostText
                //сообщение берем из стейта, так как оно после ввода в ->//
                // -> текс эреа попадает в стейт//
            }
            return {...state, postData:[...state.postData, newPost], newPostText:""}
        case "CHANGE-NEW-POST-TEXT":
            return {...state, newPostText: action.newPostText}
        default: return state;
    }
}

export const addNewPostCreateAction
    :(() => addNewPostActionType) //create Action type
    = () => ({type:"ADD-NEW-POST"})

export const changeNewPostTextCreateAction
    :((newPostText:string) => changeNewPostActionType) //create Action type
    = (newPostText) =>  ({type:"CHANGE-NEW-POST-TEXT", newPostText:newPostText})