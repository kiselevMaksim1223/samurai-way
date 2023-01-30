import React, {ChangeEvent} from 'react';
import s from "../Dialogs/Dialogs.module.css";

type AddTextItemPropsType = {
    value:string
    buttonName:string
    onChangeCallback:(text:string) => void
    onClickCallback: () => void
}
//универсальная компонента для текстэриа и кнопки
export const AddTextItem = (props:AddTextItemPropsType) => {

    const addItemOnClickHandler = () => {
        props.onClickCallback()
    }

    const onChangeTextHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        let itemText = e.currentTarget.value
        props.onChangeCallback(itemText)
    }

    return (
        <div className={s.createMessageWrapper}>
            <div className={s.newPost_block}>
                <div>
                    <textarea
                        value={props.value}
                        onChange={onChangeTextHandler}></textarea>
                </div>
                <div>
                    <button onClick={addItemOnClickHandler}>{props.buttonName}</button>
                </div>
            </div>
        </div>
    );
};

