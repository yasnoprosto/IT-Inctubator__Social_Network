import React, {ChangeEvent, KeyboardEvent, useRef} from "react";
import {Post} from "./Post";
import {addPostAC, updateNewPostTextAC} from "../../../redux/reducers/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateDataType} from "../../../App";
import {store} from "../../../redux/redux-store";

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    newPostText: string
    mappedPostsData: JSX.Element[]
}

// const inputRef = useRef<HTMLTextAreaElement>(null);

type MapDispatchToPropsType = {
    addPost: (state: AppStateDataType) => void
    onKeyUpHandler: (e: KeyboardEvent<HTMLTextAreaElement>, state: AppStateDataType) => void
    onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
}


const mapStateToProps = (state: AppStateDataType): MapStateToPropsType => {
    return {
        newPostText: state.profileData.newPostText,
        mappedPostsData: state.profileData.postsData.map((p, i) => {
            return (
                <Post key={i} postId={p.postId} postText={p.postText} postLikesCount={p.postLikesCount}/>
            );
        }),
    };
};

const mapDispatchToProps = (): MapDispatchToPropsType => {
    return {
        addPost: (state: AppStateDataType) => {
            if (state.profileData.newPostText.trim()) {
                store.dispatch(addPostAC());
            }
        },
        onKeyUpHandler: (e: KeyboardEvent<HTMLTextAreaElement>, state: AppStateDataType) => {
            if (e.key === "Enter") {
                if (state.profileData.newPostText.trim()) {
                    store.dispatch(addPostAC());
                }
            }
        },
        onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => {
            store.dispatch(updateNewPostTextAC(e.currentTarget.value));
        },
    };
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);