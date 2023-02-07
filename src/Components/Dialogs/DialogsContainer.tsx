import React from "react";
import {Dialogs} from "./Dialogs";
import {
    addNewMessageBodyCreateAction,
    changeNewMessageTextCreateAction,
    dialogsPageType
} from "../../redux/dialogPage-reducer";
import {connect} from "react-redux";
import {addNewMessageActionType, AppStateType, changeNewMessageTextActionType} from "../../redux/redux-store";
import {Dispatch} from "redux";



type MapStateToProps = dialogsPageType

type MapDispatchToProps = {
    onChangeMessageBody: (text:string) => void
    onClickAddMessageBody: () => void
}

// тип для Props компоненты Dialog
export type DialogsDataPropsType = MapStateToProps & MapDispatchToProps


const mapStateToProps = (state:AppStateType):MapStateToProps => {
    debugger
    return{
        dialogItemData: state.dialogsPage.dialogItemData,
        messageItemData: state.dialogsPage.messageItemData,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToProps => {
    return{
        onChangeMessageBody: (text:string) => {
            let action:changeNewMessageTextActionType = changeNewMessageTextCreateAction(text)
            dispatch(action)
        },
        onClickAddMessageBody: () => {
            let action:addNewMessageActionType = addNewMessageBodyCreateAction()
            dispatch(action)
        }

    }
}

export const SuperDialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)