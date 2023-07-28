import s from "./Dialogs.module.css";
import {DialogUsers} from "./Dialog/DialogUsers";
import {DialogMessages} from "./Dialog/DialogMessages";
import React, {ChangeEvent, KeyboardEvent} from "react";
import {DialogsDataType} from "../../App";
import {ActionsType} from "../../redux/store";
import {addMessageAC, updateNewMessageAC} from "../../redux/reducers/dialogs-reducer";

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

            props.dispatch(addMessageAC())
        }
    };

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageAC(e.currentTarget.value))
    };

    const onKeyUpHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === "Enter") {
            if(props.dialogsData.newMessageText.trim()) {
                props.dispatch(addMessageAC())
            }
        }
    }



    return (
        <div className={s.container}>
            <div>
                {mappedDialogsUsers}
            </div>
            <div className={s.chatContainer}>
                {mappedDialogsMessages}
                <div className={s.inputButtonContainer}>
                    <textarea onKeyUp={onKeyUpHandler} onChange={onChangeHandler} className={s.textarea} value={props.dialogsData.newMessageText}></textarea>
                    <span>
                <button onClick={onClickHandler} className={s.sendMessageButton}>SEND</button>
                </span>
                </div>
            </div>
        </div>
    );
};