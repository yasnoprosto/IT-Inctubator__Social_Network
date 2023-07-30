import s from "./Dialogs.module.css";
import React from "react";
import {DialogsPropsType} from "./DialogsContainer";

export const Dialogs = (props: DialogsPropsType) => {
    debugger
    return (
        <div className={s.container}>
            <div>
                {props.mappedDialogsUsers}
            </div>
            <div className={s.chatContainer}>
                {props.mappedDialogsMessages}
                <div className={s.inputButtonContainer}>
                    <textarea
                        onKeyUp={(e) => props.onKeyUpHandler(e, props.dialogsPage)}
                        onChange={(e) => props.onChangeHandler(e)}
                        className={s.textarea}
                        value={props.newMessageText}></textarea>
                    <span>
                <button onClick={() => props.onClickHandler(props.dialogsPage)}
                        className={s.sendMessageButton}>SEND</button>
                </span>
                </div>
            </div>
        </div>
    );
};