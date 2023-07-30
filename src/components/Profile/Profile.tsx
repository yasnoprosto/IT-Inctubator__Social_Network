import React from "react";
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
// import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.container}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};
