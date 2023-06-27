import React from "react";
import s from "./DialogMessages.module.css"

type DialogMessages = {
    message: string;
}
export const DialogMessages = (props: DialogMessages) => {
    const {message} = props

    return (
        <div className={s.container}>
            <div className={s.message}>{message}</div>
        </div>
    );
};
