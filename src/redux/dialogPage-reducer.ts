import {
    actionsType,
    ADD_NEW_MESSAGE,
    addNewMessageActionType,
    CHANGE_NEW_MESSAGE_TEXT,
    changeNewMessageTextActionType
} from "./redux-store";



export type dialogItemDataType = {
    id: number
    name: string
}

export type messageItemDataType = {
    id: number
    message: string
}

let initialState:dialogsPageType = {
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

export type dialogsPageType = {
    dialogItemData: dialogItemDataType[]
    messageItemData: messageItemDataType[]
    newMessageBody:string
}


export const dialogPageReducer = (state:dialogsPageType = initialState, action:actionsType):dialogsPageType => {

    switch (action.type) {
        case ADD_NEW_MESSAGE:
            const newMessageBody = {id: 5, message: state.newMessageBody}
            return {...state, messageItemData:[...state.messageItemData, newMessageBody], newMessageBody: ""}

        case CHANGE_NEW_MESSAGE_TEXT:
            return {...state, newMessageBody:action.newMessageBody}
        default: return state
    }

}

export const addNewMessageBodyCreateAction
    :(() => addNewMessageActionType) //create Action type
    = () => ({type:ADD_NEW_MESSAGE})

export const changeNewMessageTextCreateAction
    :((newMessageBody:string)=> changeNewMessageTextActionType) //create Action type
    = (newMessageBody) => ({type:CHANGE_NEW_MESSAGE_TEXT, newMessageBody:newMessageBody})