import {actionsType, profilePageType} from "./store";

let initialState = {
            postData: [
                {id: 1, postContent: "My first post"},
                {id: 2, postContent: "HelloFW"},
                {id: 3, postContent: "Do you know Lil Peep?"},
                {id: 4, postContent: "Anna"},
                {id: 5, postContent: "Igor"},
            ],
            newPostText: "SAMURAIS"
        }

export const profilePageReducer = (state: profilePageType = initialState, action: actionsType) => {
    switch (action.type) {
        case "ADD-NEW-POST":
            const newPost = {
                id: 5,
                postContent: state.newPostText
                //сообщение берем из стейта, так как оно после ввода в ->//
                // -> текс эреа попадает в стейт//
            }
            state.postData.push(newPost)
            state.newPostText = ""
            return state;
        case "CHANGE-NEW-POST-TEXT":
            if (action.newPostText != null) {
                state.newPostText = action.newPostText
            }
            return state;
        default: return state;
    }


}

export const addNewPostCreateAction
    :(() => actionsType) //create Action type
    = () => ({type:"ADD-NEW-POST"})

export const changeNewPostTextCreateAction
    :((newPostText:string) => actionsType) //create Action type
    = (newPostText) =>  ({type:"CHANGE-NEW-POST-TEXT", newPostText:newPostText})