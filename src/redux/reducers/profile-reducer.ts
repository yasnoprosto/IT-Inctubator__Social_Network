import {v1} from "uuid";
import {ProfilePageDataType} from "../../App";

const initialState: ProfilePageDataType = {
    postsData: [
        {
            postID: v1(),
            postLikesCount: 40,
            postText: "Hello"
        },
        {
            postID: v1(),
            postLikesCount: 68,
            postText: "I'm Learning React"
        },
        {
            postID: v1(),
            postLikesCount: 113,
            postText: "My goal is to be React Developer"
        },
        {
            postID: v1(),
            postLikesCount: 104,
            postText: "I love u!"
        },
    ],
    newPostText: ""
};

type ProfileActionsTypes = AddPostActionType | UpdateNewPostTextActionType

export const profileReducer = (state: ProfilePageDataType = initialState, action: any): ProfilePageDataType => {
    debugger
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {
                postID: v1(),
                postLikesCount: 0,
                postText: state.newPostText
            };// state.postsData.unshift(newPost);
            // state.newPostText = "";
            // return state;
            return {
                ...state,
                postsData: [newPost, ...state.postsData],
                newPostText: ""
            };
        }
        case "UPDATE-NEW-POST-TEXT": {
            debugger
            return {
                ...state,
                newPostText: action.value
            };
        }
        default:
            return state;
    }
};

export type AddPostActionType = {
    type: string
};

export const addPostAC = (): AddPostActionType => {
    return {type: "ADD-POST"};
};

export type UpdateNewPostTextActionType = {
    type: string
    value: string
};


export const updateNewPostTextAC = (value: string): UpdateNewPostTextActionType => {
    debugger
    return {
        type: "UPDATE-NEW-POST-TEXT",
        value: value
    };
};