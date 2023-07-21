import React, {ChangeEvent, useRef} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post";
import {ProfileDataType} from "../../../App";
import {ActionsType} from "../../../redux/state";

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
            debugger
            const postText = inputRef.current?.value;
            if (postText) {
                console.log(props);
                const action = {type: "ADD-POST"};
                props.dispatch(action);
            }
        };

        const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            debugger
            const action = {type: "UPDATE-NEW-POST-TEXT", value: e.currentTarget.value};
            props.dispatch(action);
        };

        console.log(props);
        return (
            <div className={s.container}>
                <textarea onChange={onChangeHandler} ref={inputRef} className={s.textarea}
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