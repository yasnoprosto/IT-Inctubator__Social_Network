import {DialogUsers} from "./Dialog/DialogUsers";
import {DialogMessages} from "./Dialog/DialogMessages";
import React, {ChangeEvent, KeyboardEvent} from "react";
import {sendMessageAC, updateNewMessageAC} from "../../redux/reducers/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateDataType, DialogsPageDataType} from "../../App";
import {Dispatch} from "redux";

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

export type MapStateToPropsType = {
    newMessageText: string
    dialogsPage: DialogsPageDataType
    mappedDialogsUsers: JSX.Element[]
    mappedDialogsMessages: JSX.Element[]
};

export type MapDispatchToPropsType = {
    onClickHandler: (dialogsPage: DialogsPageDataType) => void
    onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onKeyUpHandler: (e: KeyboardEvent<HTMLTextAreaElement>, dialogsData: DialogsPageDataType) => void
}

const mapStateToProps = (state: AppStateDataType): MapStateToPropsType => {
    return {
        newMessageText: state.dialogsData.newMessageText,
        dialogsPage: state.dialogsData,
        mappedDialogsUsers: state.dialogsData.dialogsUsers.map((u, i) => {
            return (
                <DialogUsers key={i} userId={u.userId} userName={u.userName}/>
            );
        }),
        mappedDialogsMessages: state.dialogsData.dialogsMessages.map((m, i) => {
            return (
                <DialogMessages key={i} messageId={m.messageId} messageText={m.messageText}/>
            );
        }),
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onClickHandler: (dialogsPage: DialogsPageDataType): void => {
            if (dialogsPage.newMessageText.trim()) {
                dispatch(sendMessageAC());
            }
        },
        onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => {
            debugger
            dispatch(updateNewMessageAC(e.currentTarget.value));
        },
        onKeyUpHandler: (e: KeyboardEvent<HTMLTextAreaElement>, dialogsPage: DialogsPageDataType) => {
            if (e.key === "Enter") {
                if (dialogsPage.newMessageText.trim()) {
                    dispatch(sendMessageAC());
                }
            }
        }
    };
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);