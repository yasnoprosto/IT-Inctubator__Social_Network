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
            break;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.value;
            break;
        }
    }
    return state
};