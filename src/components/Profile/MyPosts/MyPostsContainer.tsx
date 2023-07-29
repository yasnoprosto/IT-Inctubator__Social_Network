import React, {ChangeEvent, KeyboardEvent, useRef} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post";
import {ProfileDataType} from "../../../App";
import {ActionsType, StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/reducers/profile-reducer";
import {MyPosts} from "./MyPosts";

type MyPostsContainerPropsType = {
    store: StoreType
}

export const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {

    const state = props.store.getState().profileData

        const mappedPostsData = state.postsData.map((p, i) => {
            return (
                <Post key={i} postId={p.postId} postText={p.postText} postLikesCount={p.postLikesCount}/>
            );
        });

        const inputRef = useRef<HTMLTextAreaElement>(null);

        const addPost = () => {
            debugger
            if(state.newPostText.trim()) {
                props.store.dispatch(addPostAC());
            }
        };

        const onKeyUpHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
            if(e.key === "Enter") {
                if(state.newPostText.trim()) {
                    props.store.dispatch(addPostAC());
                }
            }
        }

        const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.store.dispatch(updateNewPostTextAC(e.currentTarget.value));
        };

        return (
            <div>
                <MyPosts mappedPosts={mappedPostsData} inputRef={inputRef} newPostText={state.newPostText} addPostCallback={addPost} onKeyUpCallback={onKeyUpHandler} onChangeCallback={onChangeHandler}/>
            </div>
        );
    }
;