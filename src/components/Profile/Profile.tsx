import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <>
            <div className={s.item}>ava + desc</div>
            <MyPosts />
        </>
    );
};
