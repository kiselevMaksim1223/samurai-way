import React from 'react';
import './index.css';
// import {addNewPost, changeNewPostText, state, stateType, subscribe, store} from "./redux/state";
import {stateType, store} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";





// export type dialogItemType = {
//     id:number
//     name:string
// }
//
// export type messageItemType = {
//     id:number
//     message:string
// }
//
// export type postDataType = {
//     id:number
//     postContent:string
// }

// const dialogItemData:dialogItemType[] = [
//     {id:1, name:"Vasa"},
//     {id:2, name:"Dima"},
//     {id:3, name:"Sasha"},
//     {id:4, name:"Anna"},
//     {id:5, name:"Igor"},
// ]
//
// const messageItemData:messageItemType[] = [
//     {id:1, message:"Hi"},
//     {id:2, message:"Good"},
//     {id:3, message:"Nonononnono"},
//     {id:4, message:"FUCK me"},
// ]
//
// const postData:postDataType[] = [
//     {id:1, postContent:"My first post"},
//     {id:2, postContent:"HelloFW"},
//     {id:3, postContent:"Do you know Lil Peep?"},
//     {id:4, postContent:"Anna"},
//     {id:5, postContent:"Igor"},
// ]

// const renderEntireTree = () => {
//     ReactDOM.render(
//         <App
//             // dialogItemData={dialogItemData}
//             // messageItemData={messageItemData}
//             // postData ={postData}
//             state = {state}
//         />,
//         document.getElementById('root')
//     );
// }

let renderEntireTree = (state:stateType) => {
    ReactDOM.render(
        <App
            // dialogItemData={dialogItemData}
            // messageItemData={messageItemData}
            // postData ={postData}
            state = {state}
            store = {store}
        />,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState())

store.subscribe(renderEntireTree)