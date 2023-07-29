import s from "./Dialogs.module.css";
import React, {ChangeEvent, KeyboardEvent} from "react";

type DialogsPropsType = {
    newMessageText: string
    mappedDialogsUsers: JSX.Element[]
    mappedDialogsMessages: JSX.Element[]
    onKeyUpCallback: (e: KeyboardEvent<HTMLTextAreaElement>) => void
    onChangeCallback: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onClickCallback: () => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    return (
        <div className={s.container}>
            <div>
                {props.mappedDialogsUsers}
            </div>
            <div className={s.chatContainer}>
                {props.mappedDialogsMessages}
                <div className={s.inputButtonContainer}>
                    <textarea
                        onKeyUp={(e) => props.onKeyUpCallback(e)}
                        onChange={(e) => props.onChangeCallback(e)}
                        className={s.textarea}
                        value={props.newMessageText}></textarea>
                    <span>
                <button onClick={props.onClickCallback}
                        className={s.sendMessageButton}>SEND</button>
                </span>
                </div>
            </div>
        </div>
    );
};