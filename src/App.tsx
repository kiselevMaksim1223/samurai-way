import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {dialogItemType, messageItemType, postDataType} from "./index";

type AppDataPropsType = {
    dialogItemData: dialogItemType[]
    messageItemData: messageItemType[]
    postData: postDataType[]
}


const App = (props: AppDataPropsType) => {

    const DialogComponent = () => {
        return (
            <Dialogs
                dialogItemData={props.dialogItemData}
                messageItemData={props.messageItemData}
            />
        )
    }

    const ProfileComponent = () => {
        return (
            <Profile postData={props.postData}/>
        )
    }

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route path="/profile" component={Profile}/>*/}
                    <Route path="/profile" render={ProfileComponent}/>
                    {/*<Route path="/dialogs" component={Dialogs}/>*/}
                    <Route path="/dialogs" render={DialogComponent}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
