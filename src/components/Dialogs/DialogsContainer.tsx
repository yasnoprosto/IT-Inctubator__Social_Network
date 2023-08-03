import {ChangeEvent} from "react";
import {sendMessageAC, updateNewMessageAC} from "../../redux/reducers/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateDataType, DialogsPageDataType} from "../../App";
import {Dispatch} from "redux";

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

export type MapStateToPropsType = {
    newMessageText: string
    dialogsData: DialogsPageDataType
};

export type MapDispatchToPropsType = {
    onClickHandler: () => void
    onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onKeyUpHandler: () => void
}

const mapStateToProps = (state: AppStateDataType): MapStateToPropsType => {
    return {
        newMessageText: state.dialogsData.newMessageText,
        dialogsData: state.dialogsData,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onClickHandler: (): void => {
            dispatch(sendMessageAC());
        },
        onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateNewMessageAC(e.currentTarget.value));
        },
        onKeyUpHandler: () => {
            dispatch(sendMessageAC());
        }
    };
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);