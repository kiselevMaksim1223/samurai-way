import {actionsType, addNewMessageActionType, changeNewMessageTextActionType, dialogsPage} from "./store";

let initialState = {
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
            newMessageBody: "Enter your message"
        }

export const dialogPageReducer = (state:dialogsPage = initialState, action:actionsType) => {

    switch (action.type) {
        case "ADD-NEW-MESSAGE":
            const newMessageBody = {id: 5, message: state.newMessageBody}
            // state.messageItemData.push(newMessageBody)
            // state.newMessageBody = ""
            return {...state, messageItemData:[...state.messageItemData, newMessageBody], newMessageBody: ""}

        case "CHANGE-NEW-MESSAGE-TEXT":
            // if (action.newMessageBody != null) {
            //     state.newMessageBody = action.newMessageBody
            // }
            return {...state, newMessageBody:action.newMessageBody}
        default: return state
    }

}

export const addNewMessageBodyCreateAction
    :(() => addNewMessageActionType) //create Action type
    = () => ({type:"ADD-NEW-MESSAGE"})

export const changeNewMessageTextCreateAction
    :((newMessageBody:string)=> changeNewMessageTextActionType) //create Action type
    = (newMessageBody) => ({type:"CHANGE-NEW-MESSAGE-TEXT", newMessageBody:newMessageBody})