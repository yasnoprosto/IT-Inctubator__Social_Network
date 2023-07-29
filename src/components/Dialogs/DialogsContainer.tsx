import s from "./Dialogs.module.css";
import {DialogUsers} from "./Dialog/DialogUsers";
import {DialogMessages} from "./Dialog/DialogMessages";
import React, {ChangeEvent, KeyboardEvent} from "react";
import {addMessageAC, updateNewMessageAC} from "../../redux/reducers/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

type DialogsContainerPropsType = {}

export const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {

    return (
        <div className={s.container}>
            <StoreContext.Consumer>{
                (store) => {
                    const state = store.getState();

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
                        if (state.dialogsData.newMessageText.trim()) {

                            store.dispatch(addMessageAC());
                        }
                    };

                    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
                        store.dispatch(updateNewMessageAC(e.currentTarget.value));
                    };

                    const onKeyUpHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
                        if (e.key === "Enter") {
                            if (state.dialogsData.newMessageText.trim()) {
                                store.dispatch(addMessageAC());
                            }
                        }
                    };

                    return (
                        <Dialogs
                            newMessageText={state.dialogsData.newMessageText}
                            mappedDialogsUsers={mappedDialogsUsers}
                            mappedDialogsMessages={mappedDialogsMessages}
                            onKeyUpCallback={onKeyUpHandler}
                            onChangeCallback={onChangeHandler}
                            onClickCallback={onClickHandler}/>
                    );
                }
            }
            </StoreContext.Consumer>
        </div>
    );
};