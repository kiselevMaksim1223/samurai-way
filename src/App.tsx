import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navigation/Navigation";
import {Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {SuperDialogContainer} from "./Components/Dialogs/DialogsContainer";
import {FriendsContainer} from "./Components/Friends/FriendsContainer";
import {UsersContainer} from "./Components/users/UsersContainer";
import {ProfileContainer} from "./Components/Profile/ProfileContainer";



const App = () => {

    const DialogComponent = () => {
        return (
            <SuperDialogContainer/>
        )
    }

    const FriendsComponents = () => {
        return (
            <FriendsContainer />
        )
    }

    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId" component={ProfileContainer}/>
                    <Route path="/news" component={News}/>
                    <Route path="/friends" component={FriendsComponents}/>
                    <Route path="/dialogs" render={DialogComponent}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/users" component={UsersContainer}/>
                </div>
            </div>
    );
}

export default App;
