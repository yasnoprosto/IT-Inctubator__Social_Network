import React from "react";
import s from "./DialogMessages.module.css"

export type DialogMessagesType = {
    messageId: string
    messageText: string
}
export const DialogMessages = (props: DialogMessagesType) => {
    const {messageText} = props

    return (
        <div className={s.container}>
            <div className={s.message}>{messageText}</div>
        </div>
    );
};
