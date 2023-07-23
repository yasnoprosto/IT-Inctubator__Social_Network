import {v1} from "uuid";
import {ADD_POST, UPDATE_NEW_POST_TEXT} from "./dialogs-reducer";

export const ADD_MESSAGE = "ADD-MESSAGE";
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const profileReducer  = (state: any, action: any) => {
    debugger
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                postId: v1(),
                postLikesCount: 0,
                postText: state.newPostText
            };
            state.postsData.push(newPost);
            state.newPostText = "";
            break;
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.value;
            break;
        }
    }
    return state
};