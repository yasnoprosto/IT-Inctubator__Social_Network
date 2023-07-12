import {rerenderEntireTree} from "./render";
import {addPost, updateNewPostText, state} from "./redux/state";


rerenderEntireTree(state, addPost, updateNewPostText);
