import {v1} from "uuid";
import avatar from "../../src/components/avatar_sidebar.png";
import {AppStateDataType} from "../App";
import {addPostAC, updateNewPostAC} from "./reducers/profile-reducer";
import {sidebarReducer} from "./reducers/sidebar-reducer";
import {profileReducer} from "./reducers/profile-reducer";
import {addMessageAC, dialogsReducer, updateNewMessageAC} from "./reducers/dialogs-reducer";

export type addPostAT = ReturnType<typeof addPostAC>
export type updateNewPostAT = ReturnType<typeof updateNewPostAC>
export type addMessageAT = ReturnType<typeof addMessageAC>
export type updateNewMessageAT = ReturnType<typeof updateNewMessageAC>

export type ActionsType = updateNewPostAT | addPostAT | addMessageAT | updateNewMessageAT

export type StoreType = {
    _state: AppStateDataType
    _callSubscriber: () => void
    getState: () => AppStateDataType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

export const store: StoreType = {
    _state: {
        profileData: {
            postsData: [
                {
                    postId: v1(),
                    postLikesCount: 40,
                    postText: "Hello"
                },
                {
                    postId: v1(),
                    postLikesCount: 68,
                    postText: "I'm Learning React"
                },
                {
                    postId: v1(),
                    postLikesCount: 113,
                    postText: "My goal is to be React Developer"
                },
                {
                    postId: v1(),
                    postLikesCount: 104,
                    postText: "I love u!"
                },
            ],
            newPostText: ""
        },
        dialogsData: {
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
        },
        sidebarData: {
            friendsListData: [
                {
                    id: v1(),
                    avatar: avatar,
                    name: "Oleg"
                },
                {
                    id: v1(),
                    avatar: avatar,
                    name: "Mike"
                },
                {
                    id: v1(),
                    avatar: avatar,
                    name: "Stas"
                },
            ]
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },

    // addPost() {
    //     const newPost = {
    //         postId: v1(),
    //         postLikesCount: 0,
    //         postText: this._state.profileData.newPostText
    //     };
    //     this._state.profileData.postsData.push(newPost);
    //     this._state.profileData.newPostText = "";
    //     this._callSubscriber();
    // },
    // updateNewPostText(value: string) {
    //     this._state.profileData.newPostText = value;
    //     this._callSubscriber();
    // },
    // addMessage() {
    //     debugger
    //     const newMessage = {
    //         messageId: v1(),
    //         messageText: this._state.dialogsData.newMessageText
    //     };
    //     this._state.dialogsData.dialogsMessages.push(newMessage);
    //     this._state.dialogsData.newMessageText = "";
    //     this._callSubscriber();
    // },
    // updateNewMessageText(value: string) {
    //     this._state.dialogsData.newMessageText = value;
    //     this._callSubscriber();
    // },

    dispatch(action: ActionsType) {
        this._state.profileData = profileReducer(this._state.profileData, action);
        this._state.dialogsData = dialogsReducer(this._state.dialogsData, action);
        this._state.sidebarData = sidebarReducer(this._state.sidebarData, action);

        this._callSubscriber();
    }
};