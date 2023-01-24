import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {Friends} from "./Components/Friends/Friends";
import {EmptyObject, Store} from "redux";
import {actionsType, dialogsPage, friendsPage, profilePageType} from "./redux/store";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {store} from "./redux/redux-store";


// type AppDataPropsType = {
//     dialogItemData: dialogItemType[]
//     messageItemData: messageItemType[]
//     postData: postDataType[]
// }

export type storeType = Store<EmptyObject & {profilePage: profilePageType, dialogsPage: dialogsPage, friendsPage: friendsPage}, actionsType>

type AppStateType = {
    state: EmptyObject & { friendsPage: friendsPage; dialogsPage: dialogsPage; profilePage: profilePageType }
    store: storeType
    // addPost:(postContent:string) => void
    // addPost:() => void
    // changeNewPostText: (newPostText: string) => void
}


const App = (props: AppStateType) => {

    const DialogComponent = () => {
        return (
            <DialogsContainer
                store = {store}
            />
        )
    }

    const ProfileComponent = () => {
        return (
            <Profile

                // postData={props.state.profilePage.postData}
                // newTextPost={props.state.profilePage.newPostText}
                // dispatch={props.store.dispatch.bind(props.store)}
                // changeNewPostText = {props.store.dispatch.bind(props.store)}
            />
        )
    }

    const FriendsComponents = () => {
        return (
            <Friends friendPage = {props.state.friendsPage}/>
        )
    }

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={ProfileComponent}/>
                    <Route path="/news" component={News}/>
                    <Route path="/friends" component={FriendsComponents}/>
                    <Route path="/dialogs" render={DialogComponent}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
