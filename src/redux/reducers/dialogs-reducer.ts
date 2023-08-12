import {v1} from "uuid";
import {DialogsPageDataType} from "../../App";


const initialState: DialogsPageDataType = {
    dialogsUsers: [
        {
            userID: v1(),
            userName: "Denis"
        },
        {
            userID: v1(),
            userName: "Alex"
        },
        {
            userID: v1(),
            userName: "Michael"
        },
        {
            userID: v1(),
            userName: "Ludovic"
        },
        {
            userID: v1(),
            userName: "Cinderella"
        }
    ],
    dialogsMessages: [
        {
            messageID: v1(),
            messageText: "Hello"
        },
        {
            messageID: v1(),
            messageText: "How are u?"
        },
        {
            messageID: v1(),
            messageText: "I love y'all"
        },
        {
            messageID: v1(),
            messageText: "Hello"
        },
        {
            messageID: v1(),
            messageText: "Let's fun"
        },
    ],
    newMessageText: ""
}

export const dialogsReducer = (state: DialogsPageDataType = initialState, action: AllDialogsActionsType): DialogsPageDataType => {
    debugger
    switch (action.type) {
        case "SEND-MESSAGE": {
            const newMessage = {
                messageID: v1(),
                messageText: state.newMessageText
            };
            return {...state, dialogsMessages: [...state.dialogsMessages, newMessage], newMessageText: ""};
        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            return {...state, newMessageText: action.value};
        }
        default:
            return state;
    }
};

type AllDialogsActionsType = SendMessageActionType | UpdateNewMessageActionType


export type SendMessageActionType = ReturnType<typeof sendMessageAC>

export const sendMessageAC = () => {
    return {type: "SEND-MESSAGE"} as const;
};

export type UpdateNewMessageActionType = ReturnType<typeof updateNewMessageAC>

export const updateNewMessageAC = (value: string) => {
    debugger
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        value: value
    } as const;
};