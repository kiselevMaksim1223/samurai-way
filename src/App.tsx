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
import {changeNewPostText, stateType} from "./redux/state";
// import {dialogItemType, messageItemType, postDataType} from "./index";

// type AppDataPropsType = {
//     dialogItemData: dialogItemType[]
//     messageItemData: messageItemType[]
//     postData: postDataType[]
// }

type AppStateType = {
    state:stateType
    // addPost:(postContent:string) => void
    addPost:() => void
    changeNewPostText: (newPostText: string) => void
}




const App = (props: AppStateType) => {

    const DialogComponent = () => {
        return (
            <Dialogs
                // dialogItemData={props.dialogItemData}
                dialogItemData={props.state.dialogsPage.dialogItemData}
                messageItemData={props.state.dialogsPage.messageItemData}
            />
        )
    }

    const ProfileComponent = () => {
        return (
            <Profile
                postData={props.state.profilePage.postData}
                newTextPost = {props.state.profilePage.newPostText}
                addPost = {props.addPost}
                changeNewPostText = {props.changeNewPostText}
            />
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
