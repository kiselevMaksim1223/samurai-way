import {actionsType, friendsPage} from "./store";
import anna from "../Components/Friends/Anna.jpg"
import chach from "../Components/Friends/chachkin.jpg"
import Igor from "../Components/Friends/Igor.jpg"
import stepan from "../Components/Friends/Stepan.jpg"

let initialState = {
            friendsList: [
                {id: 1, friend: "Anna", Avatar:anna},
                {id: 2, friend: "Igor", Avatar:Igor},
                {id: 3, friend: "Chachkin", Avatar:chach},
                {id: 4, friend: "Stepan", Avatar:stepan},
            ]
        }

export const friendsPageReducer = (state:friendsPage = initialState, action:actionsType) => {
    switch (action.type){
        default:return state
    }

}