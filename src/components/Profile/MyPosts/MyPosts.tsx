import React, {useRef} from "react";
import s from "./MyPosts.module.css";
import {Post, PostType} from "./Post";
import {DialogMessagesType} from "../../Dialogs/Dialog/DialogMessages";
import {v1} from "uuid";

type MyPostsPropsType = {
    postsData: PostType[];
    addPost:(postText: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

        const mappedPostsData = props.postsData.map((p, i) => {
            return (
                <Post key={i} postId={p.postId} postText={p.postText} postLikesCount={p.postLikesCount}/>
            );
        });

        const inputRef = useRef<HTMLTextAreaElement>(null);

    const onClickHandler = () => {
        const postText = inputRef.current?.value
        if(postText) {
        props.addPost(inputRef.current.value);
        inputRef.current.value = ""
        }
    };
    return (
            <div className={s.container}>
                <textarea ref={inputRef} className={s.textarea}/>
                <button onClick={onClickHandler} className={s.addPostButton}>Add post
                </button>
                <div className={s.posts}>
                    {mappedPostsData}
                </div>
            </div>
        );
    }
;