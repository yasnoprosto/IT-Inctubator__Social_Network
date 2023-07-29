import s from "./Dialogs.module.css";
import {DialogUsers} from "./Dialog/DialogUsers";
import {DialogMessages} from "./Dialog/DialogMessages";
import React, {ChangeEvent, KeyboardEvent} from "react";
import {DialogsDataType} from "../../App";
import {ActionsType, StoreType} from "../../redux/store";
import {addMessageAC, updateNewMessageAC} from "../../redux/reducers/dialogs-reducer";
import {Dialogs} from "./Dialogs";

type DialogsContainerPropsType = {
    store: StoreType
}

export const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {

    const state = props.store.getState()

    const mappedDialogsUsers = state.dialogsData.dialogsUsers.map((u, i) => {
        return (
            <DialogUsers key={i} userId={u.userId} userName={u.userName}/>
        );
    });


    const mappedDialogsMessages = state.dialogsData.dialogsMessages.map((m, i) => {
        return (
            <DialogMessages key={i} messageId={m.messageId} messageText={m.messageText}/>
        );
    });

    const onClickHandler = () => {
        if(state.dialogsData.newMessageText.trim()) {

            props.store.dispatch(addMessageAC())
        }
    };

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(updateNewMessageAC(e.currentTarget.value))
    };

    const onKeyUpHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === "Enter") {
            if(state.dialogsData.newMessageText.trim()) {
                props.store.dispatch(addMessageAC())
            }
        }
    }



    return (
        <div className={s.container}>
            <Dialogs
                newMessageText={state.dialogsData.newMessageText}
                mappedDialogsUsers={mappedDialogsUsers}
                mappedDialogsMessages={mappedDialogsMessages}
                onKeyUpCallback={onKeyUpHandler}
                onChangeCallback={onChangeHandler}
                onClickCallback={onClickHandler}/>
            </div>
    );
};