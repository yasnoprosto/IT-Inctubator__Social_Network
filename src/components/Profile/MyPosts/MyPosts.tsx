import React, {ChangeEvent, KeyboardEvent, useRef} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post";
import {ProfileDataType} from "../../../App";
import {ActionsType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/reducers/profile-reducer";

type MyPostsPropsType = {
    profileData: ProfileDataType;
    dispatch: (action: ActionsType) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

        const mappedPostsData = props.profileData.postsData.map((p, i) => {
            return (
                <Post key={i} postId={p.postId} postText={p.postText} postLikesCount={p.postLikesCount}/>
            );
        });

        const inputRef = useRef<HTMLTextAreaElement>(null);

        const addPost = () => {
            const postText = inputRef.current?.value;
            if (postText) {
                props.dispatch(addPostAC());
            }
        };

    const onKeyUpHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === "Enter") {
            if(props.profileData.newPostText.trim()) {
                props.dispatch(addPostAC());
            }
        }
    }

        const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.dispatch(updateNewPostTextAC(e.currentTarget.value));
        };

        return (
            <div className={s.container}>
                <textarea onKeyUp={onKeyUpHandler} onChange={onChangeHandler} ref={inputRef} className={s.textarea}
                          value={props.profileData.newPostText}/>
                <button onClick={addPost} className={s.addPostButton}>Add post
                </button>
                <div className={s.posts}>
                    {mappedPostsData}
                </div>
            </div>
        );
    }
;