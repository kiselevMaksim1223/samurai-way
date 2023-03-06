import React from 'react';
import './App.css';
import {HeaderContainer} from "./Components/Header/HeaderCont";
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
    const ProfileContainerContainer = () => {

        return (
            <ProfileContainer />
        )
    }

    return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?" render={ProfileContainerContainer}/>
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
