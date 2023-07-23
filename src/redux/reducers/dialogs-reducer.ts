import {v1} from "uuid";
import {ADD_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} from "./profile-reducer";

export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const dialogsReducer = (state: any, action: any) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage = {
                messageId: v1(),
                messageText: state.newMessageText
            };
            state.dialogsMessages.push(newMessage);
            state.newMessageText = "";
            return state;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.value;
            return state;
        }
        default:
            return state;
    }
};

export const addMessageAC = () => {
    return {type: ADD_MESSAGE} as const;
};

export const updateNewMessageAC = (value: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        value: value
    } as const;
};