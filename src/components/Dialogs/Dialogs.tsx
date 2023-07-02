import s from "./Dialogs.module.css";
import {DialogType, DialogUsers} from "./Dialog/DialogUsers";
import {DialogMessages, DialogMessagesType} from "./Dialog/DialogMessages";
import {v1} from "uuid";
import {message} from "antd";
import {PostType} from "../Profile/MyPosts/Post";
import React from "react";

type DialogsPropsType = {
    dialogsUsers: DialogType[];
    dialogsMessages: DialogMessagesType[];
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const mappedDialogsUsers = props.dialogsUsers.map(u => {
        return (
            <DialogUsers userId={u.userId} userName={u.userName}/>
        )
    })


    const mappedDialogsMessages = props.dialogsMessages.map(m => {
        return (
            <DialogMessages messageId={m.messageId} messageText={m.messageText}/>
        )
    })

    return (
        <div className={s.container}>
            <div>
                {mappedDialogsUsers}
            </div>
            <div>
                {mappedDialogsMessages}
            </div>
        </div>
    );
};