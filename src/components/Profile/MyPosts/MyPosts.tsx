import React from "react";
import s from "./MyPosts.module.css";
import {Post, PostType} from "./Post";
import {DialogMessagesType} from "../../Dialogs/Dialog/DialogMessages";
import {v1} from "uuid";

type MyPostsPropsType = {
    postsData: PostType[];
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

        const mappedPostsData = props.postsData.map(p => {
            return (
                <Post postId={p.postId} postText={p.postText} postLikesCount={p.postLikesCount}/>
            )
        })


        return (
            <div className={s.container}>
                <textarea className={s.textarea}/>
                <button className={s.addPostButton}>Add post</button>
                <div className={s.posts}>
                    {mappedPostsData}
                </div>
            </div>
        );
    }
;