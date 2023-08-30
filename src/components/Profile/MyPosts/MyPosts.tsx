import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./MyPosts.module.css";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Post} from "./Post";

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

        const posts = props.postsData.map((p, i) => {
            return (
                <Post key={i} postID={p.postID} postText={p.postText} postLikesCount={p.postLikesCount}/>
            );
        });

        const onKeyUp = (e: KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === "Enter") {
                if (props.newPostText.trim()) {
                    props.onKeyUpHandler();
                }
            }
        };
        const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.onChangeHandler(e);
        };

        const onClick = () => {
            if (props.newPostText.trim()) {
                props.addPost();
            }
        };

        return (
            <div className={s.container}>
                <textarea onKeyUp={onKeyUp}
                          onChange={onChange}
                          className={s.textarea}
                          value={props.newPostText}/>
                <button onClick={onClick} className={s.addPostButton}>Add post
                </button>
                <div className={s.posts}>
                    {posts}
                </div>
            </div>
        );
    }
;