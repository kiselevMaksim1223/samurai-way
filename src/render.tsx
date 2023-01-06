import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewPost, changeNewPostText, state, stateType} from "./redux/state";




export const renderEntireTree = (state:stateType) => {
    ReactDOM.render(
        <App
            // dialogItemData={dialogItemData}
            // messageItemData={messageItemData}
            // postData ={postData}
            state = {state}
            addPost = {addNewPost}
            changeNewPostText = {changeNewPostText}
        />,
        document.getElementById('root')
    );
}

renderEntireTree(state)