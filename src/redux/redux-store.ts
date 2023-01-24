import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePage-reducer";
import {dialogPageReducer} from "./dialogPage-reducer";
import {friendsPageReducer} from "./friends-page-reducer";

let reducers = combineReducers({
    profilePage:profilePageReducer,
    dialogsPage:dialogPageReducer,
    friendsPage:friendsPageReducer
})

export let store = createStore(reducers);