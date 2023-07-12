import s from "./Dialogs.module.css";
import {DialogUsers} from "./Dialog/DialogUsers";
import {DialogMessages} from "./Dialog/DialogMessages";
import React, {ChangeEvent} from "react";
import {DialogsDataType} from "../../App";

type DialogsPropsType = {
    dialogsData: DialogsDataType
    addMessage: () => void
    updateNewMessageText: (value: string) => void
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
        props.addMessage()
        }
    };

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
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