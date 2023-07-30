import {v1} from "uuid";
import {ProfilePageDataType} from "../../App";

const initialState: ProfilePageDataType = {
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
}


export const profileReducer = (state: ProfilePageDataType = initialState, action: any): ProfilePageDataType => {
    debugger
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {
                postId: v1(),
                postLikesCount: 0,
                postText: state.newPostText
            };
            state.postsData.unshift(newPost);
            state.newPostText = "";
            return state;
        }
        case "UPDATE-NEW-POST-TEXT": {
            state.newPostText = action.value;
            return state;
        }
        default:
            return state;
    }
};

export type AddPostActionType = {
    type: string
};

export const addPostAC = (): AddPostActionType => {
    return {type: "ADD-POST"}
};

export type UpdateNewPostTextActionType = {
    type: string
    value: string
};


export const updateNewPostTextAC = (value: string): UpdateNewPostTextActionType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        value: value
    }
};