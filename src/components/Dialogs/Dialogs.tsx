import s from "./Dialogs.module.css";
import React, {ChangeEvent, KeyboardEvent} from "react";
import {DialogsPropsType} from "./DialogsContainer";
import {DialogUsers} from "./Dialog/DialogUsers";
import {DialogMessages} from "./Dialog/DialogMessages";

export const Dialogs = (props: DialogsPropsType) => {

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

    const onKeyUp = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            if (props.dialogsData.newMessageText.trim()) {
                props.onKeyUpHandler();
            }
        }
    };

    const onClick = () => {
        if (props.dialogsData.newMessageText.trim()) {
            props.onClickHandler();
        }
    };

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeHandler(e)
    };


    return (
        <div className={s.container}>
            <div>
                {mappedDialogsUsers}
            </div>
            <div className={s.chatContainer}>
                {mappedDialogsMessages}
                <div className={s.inputButtonContainer}>
                    <textarea
                        onKeyUp={onKeyUp}
                        onChange={onChange}
                        className={s.textarea}
                        value={props.newMessageText}></textarea>
                    <span>
                <button onClick={onClick}
                        className={s.sendMessageButton}>SEND</button>
                </span>
                </div>
            </div>
        </div>
    );
};