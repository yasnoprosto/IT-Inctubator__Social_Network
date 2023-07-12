import React, {ChangeEvent, useRef} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post";
import {ProfileDataType} from "../../../App";

type MyPostsPropsType = {
    profileData: ProfileDataType;
    addPost:() => void
    updateNewPostText:(value: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

        const mappedPostsData = props.profileData.postsData.map((p, i) => {
            return (
                <Post key={i} postId={p.postId} postText={p.postText} postLikesCount={p.postLikesCount}/>
            );
        });

        const inputRef = useRef<HTMLTextAreaElement>(null);

    const addPost = () => {
        const postText = inputRef.current?.value
        if(postText) {
        props.addPost();
        }
    };

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.updateNewPostText(e.currentTarget.value)
        };

        return (
            <div className={s.container}>
                <textarea onChange={onChangeHandler} ref={inputRef} className={s.textarea} value={props.profileData.newPostText}/>
                <button onClick={addPost} className={s.addPostButton}>Add post
                </button>
                <div className={s.posts}>
                    {mappedPostsData}
                </div>
            </div>
        );
    }
;