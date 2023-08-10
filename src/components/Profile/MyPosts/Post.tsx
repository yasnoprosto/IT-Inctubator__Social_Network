import React from "react";
import s from "./MyPosts.module.css";
import avatarCat from "../../Avatar_cat.png";

export type PostType = {
    postID: string
    postText: string
    postLikesCount: number
}

export const Post = (props: PostType) => {
        return (
            <div className={s.container}>
                <div className={s.imgAndText}>
                    <img
                        className={s.img}
                        src={avatarCat}
                        alt="avatar"/>
                    <span className={s.item__text}>
                    {props.postText}
                </span>
                </div>
                <div className={s.likeButton}>♥ {props.postLikesCount}</div>

            </div>
        );
    }
;