import React from "react";
import s from "./MyPosts.module.css";
import avatarCat from "../../Avatar_cat.png";

type PostPropsType = {
    text: string
    likesCount: number
}

export const Post = (props: PostPropsType) => {
        return (
            <div className={s.container}>
                <div className={s.imgAndText}>
                    <img
                        className={s.img}
                        src={avatarCat}
                        alt="avatar"/>
                    <span className={s.item__text}>
                    {props.text}
                </span>
                </div>
                <div className={s.likeButton}>♥ {props.likesCount}</div>

            </div>
        );
    }
;