import {v1} from "uuid";
import {DialogsDataType} from "../../App";


const initialState: DialogsDataType = {
    dialogsUsers: [
        {
            userId: v1(),
            userName: "Denis"
        },
        {
            userId: v1(),
            userName: "Alex"
        },
        {
            userId: v1(),
            userName: "Michael"
        },
        {
            userId: v1(),
            userName: "Ludovic"
        },
        {
            userId: v1(),
            userName: "Cinderella"
        }
    ],
    dialogsMessages: [
        {
            messageId: v1(),
            messageText: "Hello"
        },
        {
            messageId: v1(),
            messageText: "How are u?"
        },
        {
            messageId: v1(),
            messageText: "I love y'all"
        },
        {
            messageId: v1(),
            messageText: "Hello"
        },
        {
            messageId: v1(),
            messageText: "Let's fun"
        },
    ],
    newMessageText: ""
}

export const dialogsReducer = (state: DialogsDataType = initialState, action: any) => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            const newMessage = {
                messageId: v1(),
                messageText: state.newMessageText
            };
            state.dialogsMessages.push(newMessage);
            state.newMessageText = "";
            return state;
        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            state.newMessageText = action.value;
            return state;
        }
        default:
            return state;
    }
};

export type AddMessageActionType = ReturnType<typeof addMessageAC>

export const addMessageAC = () => {
    return {type: "ADD-MESSAGE"};
};

export type UpdateNewMessageActionType = ReturnType<typeof updateNewMessageAC>

export const updateNewMessageAC = (value: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        value: value
    };
};