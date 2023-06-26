import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post";

export const MyPosts = () => {
        return (
            <div className={s.container}>
                <textarea className={s.textarea}/>
                <button className={s.addPostButton}>Add post</button>
                <div className={s.posts}>
                   <Post likesCount={40} text={"Hello"}/>
                   <Post likesCount={68} text={"I'm Learning React"}/>
                   <Post likesCount={113} text={"My goal is to be React Developer"}/>
                   <Post likesCount={104} text={"I love u!"}/>
                </div>
            </div>
        );
    }
;