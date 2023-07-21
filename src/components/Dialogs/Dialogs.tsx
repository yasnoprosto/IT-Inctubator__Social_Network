import s from "./Dialogs.module.css";
import {DialogUsers} from "./Dialog/DialogUsers";
import {DialogMessages} from "./Dialog/DialogMessages";
import React, {ChangeEvent} from "react";
import {DialogsDataType} from "../../App";
import {ActionsType} from "../../redux/state";

type DialogsPropsType = {
    dialogsData: DialogsDataType
    dispatch: (action: ActionsType) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const mappedDialogsUsers = props.dialogsData.dialogsUsers.map((u, i) => {
        return (
            <DialogUsers key={i} userId={u.userId} userName={u.userName}/>
        );
    });


    const mappedDialogsMessages = props.dialogsData.dialogsMessages.map((m, i) => {
        return (
            <DialogMessages key={i} messageId={m.messageId} messageText={m.messageText}/>
        );
    });

    const onClickHandler = () => {
        if(props.dialogsData.newMessageText.trim()) {
            const action = {type: "ADD-MESSAGE"};
            props.dispatch(action)
        }
    };

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const action = {type: "UPDATE-NEW-MESSAGE-TEXT", value: e.currentTarget.value};
        props.dispatch(action)
    };



    return (
        <div className={s.container}>
            <div>
                {mappedDialogsUsers}
            </div>
            <div className={s.chatContainer}>
                {mappedDialogsMessages}
                <div className={s.inputButtonContainer}>
                    <textarea onChange={onChangeHandler} className={s.textarea} value={props.dialogsData.newMessageText}></textarea>
                    <span>
                <button onClick={onClickHandler} className={s.sendMessageButton}>SEND</button>
                </span>
                </div>
            </div>
        </div>
    );
};