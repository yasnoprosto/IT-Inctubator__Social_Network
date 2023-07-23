import {v1} from "uuid";
import {ADD_POST, UPDATE_NEW_POST_TEXT} from "./dialogs-reducer";

export const ADD_MESSAGE = "ADD-MESSAGE";
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const profileReducer  = (state: any, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                postId: v1(),
                postLikesCount: 0,
                postText: state.newPostText
            };
            state.postsData.push(newPost);
            state.newPostText = "";
            return state
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.value;
            return state
        }
        default: return state
    }
};

export const  addPostAC = () => {
    return {type: "ADD-POST"} as const
}

export const  updateNewPostAC = (value: string) => {
    return {type: "UPDATE-NEW-POST-TEXT", value: value} as const
}